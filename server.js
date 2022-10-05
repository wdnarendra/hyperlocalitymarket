const Datastore = require('nedb')
const http = require('http')
const url = require('url')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const formidable = require('formidable')
// const {random} = require('lodash')
require('dotenv').config()

function verifyjson(jsonwebtoken){
    return jwt.verify(jsonwebtoken,process.env.JSONSECRETKEY)
}
const userdatabase = {
    postdb: new Datastore({ filename: 'path/post/posts.db'}),
    users: new Datastore({ filename: 'path/Userss/users.db'}),
    likes: new Datastore({ filename: 'path/like/likes.db'}),
    likespost:new Datastore({filename:'path/likespost/likepost.db'}),
    follow:new Datastore({filename:'path/followsomeone/follow.db'})
}
http.createServer((req, res) => {
  
while(true)
try{
    userdatabase.postdb.loadDatabase()
    userdatabase.likes.loadDatabase()
    userdatabase.users.loadDatabase()
    userdatabase.likespost.loadDatabase()
    userdatabase.follow.loadDatabase()
    break
}
catch{
    continue
}


    let q = url.parse(req.url, true)
    if (req.method == "POST") {
        if (q.pathname == "/signup") {
            let data = ""
            req.on("data", (chunk) => {
                data += chunk
            })
            req.on("end", () => {
                try {
                    data = JSON.parse(data)
                    data.password = crypto.createHmac('sha512', process.env.SALT).update(data.password).digest('hex')
                    userdatabase.users.find({ username: data.username }, (err, docs) => {
                        if (docs.length === 0) {
                            userdatabase.users.insert({ username: data.username, password: data.password })
                            res.write(JSON.stringify({ jsonwebtoken: jwt.sign({ username: data.username, password: data.password }, process.env.JSONSECRETKEY,{expiresIn:600000000000}) }))
                            res.end()
                        }
                        else
                            res.write(JSON.stringify({ error: "User already registred" }))
                        res.end()
                    })
                }
                catch {
                    res.write(JSON.stringify({ error: "wrong data" }))
                    res.end()
                }
            })
        }
        if (q.pathname == "/login") {
            let data = ""
            req.on("data", (chunk) => {
                data += chunk
            })
            req.on("end", () => {
                try {
                    const user = JSON.parse(data)
                    userdatabase.users.find({ username: user.username, password: crypto.createHmac('sha512', process.env.SALT).update(user.password).digest('hex') }, (err, docs) => {
                        if (docs.length === 0) {
                            res.write(JSON.stringify({ error: "wrong info" }))
                            res.end()
                        }
                        else {
                            res.write(JSON.stringify({jsonwebtoken: jwt.sign({ username: user.username, password: docs[0].password }, process.env.JSONSECRETKEY,{expiresIn:60000000}) }))
                            res.end()
                        }
                    })
                }
                catch {
                    res.write(JSON.stringify({ error: "wrong data" }))
                    res.end()
                }

            })
        }
        if (q.pathname == "/createpost") {
            let form = new formidable.IncomingForm()
            form.parse(req, (err, fields, files) => {
                try {
                    const user = verifyjson(fields.jsonwebtoken)
                    if (user) {
                        let oldpath = files.file.filepath
                        let newpath = 'C:/Users/Narendra/Desktop/blog/hyperlocalitymarket/filessss/' + files.file.originalFilename
                        fs.rename(oldpath, newpath, (err) => {
                            if (!err) { }
                            // console.log("files upload and post created successfully")
                        })
                        userdatabase.postdb.find({ username: user.username }, (err, docs) => {
                            if (docs.length === 0) {
                                userdatabase.postdb.insert({ username: user.username, posts: [{ text: fields.text, file: files.file.originalFilename, date: `${Date()}` }] })
                            }
                            if (docs.length === 1) {
                                userdatabase.postdb.update({username:user.username},{ username: user.username, posts: [...docs[0].posts,{ text: fields.text, file: files.file.originalFilename, date: `${Date()}` }] })
                            }
                        })
                        res.end("done")
                    }
                }
                catch {
                    res.end(JSON.stringify({ error: "jwt not verified or posts not found" }))
                }
            })

        }
        if (q.pathname == "/homeprofile") {
            let data = ""
            req.on("data", (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                try {
                    data = JSON.parse(data)
                    try {
                        const user = verifyjson(data.jsonwebtoken)
                        // if (user) {
                        //     new Datastore({ filename: `path/${user.username}/posts.db`, autoload: true }).find({}, (err, docs) => {
                        //         res.write(JSON.stringify(docs))
                        //         res.end()
                        //     })
                        // }
                    }
                    catch {
                        res.write(JSON.stringify({ error: "jwt wrong" }))
                        res.end()
                    }
                }
                catch {
                    res.write(JSON.stringify({ error: "wrong data" }))
                    res.end()
                }


            })
        }
        if (q.pathname == "/likepost") {
            let data = ""
            req.on("data", (chunk) => {
                data += chunk
            })
            req.on('end', () => {
                try {
                    const user = JSON.parse(data)
                    const us = verifyjson(user.jsonwebtoken)
                    if (us) {
                        userdatabase.likespost.find({username:us.username,likespost:user.postid},(err,docs)=>{
                            if(docs.length===0){
                                userdatabase.likes.find({ postid: user.postid }, (err, docs) => {
                                    if (docs.length === 0) {
                                        userdatabase.likes.insert({ postid: user.postid, likes: 1 })
                                        userdatabase.likespost.find({username:us.username},(err,docs)=>{
                                            if(docs.length==0)
                                            userdatabase.likespost.insert({username:us.username,likespost:[user.postid]})
                                            if(docs.length===1)
                                            userdatabase.likespost.update({username:us.username},{username:us.username,likespost:[...docs[0].likespost,user.postid]})
                                        })
                                        res.end(JSON.stringify({ postid: user.postid, likes: 1 }))
                                    }
                                    else
                                        if (docs.length === 1) {
                                            userdatabase.likes.update({ postid: user.postid, likes: docs[0].likes }, { postid: user.postid, likes: docs[0].likes + 1 })
                                            userdatabase.likespost.find({username:us.username},(err,docs)=>{
                                                if(docs.length==0)
                                                userdatabase.likespost.insert({username:us.username,likespost:[user.postid]})
                                                if(docs.length===1)
                                                userdatabase.likespost.update({username:us.username},{username:us.username,likespost:[...docs[0].likespost,user.postid]})
                                            })
                                            res.end(JSON.stringify({ postid: user.postid, likes: docs[0].likes + 1 }))
                                        }
        
                                })
                            }
                            else{
                                res.end(JSON.stringify({error:"already liked"}))
                            }
                        })
                    }
                }
                catch {
                    res.end(JSON.stringify({ error: "wrong data" }))
                }
            })
        }
        if(q.pathname=="/followsomeone"){
            try{
                let data = ""
            req.on('data',(chunk)=>{
                data+=chunk
            })
            req.on('end',()=>{
                const userdata = JSON.parse(data)
                const user = jwt.verify(userdata.jsonwebtoken,process.env.JSONSECRETKEY)
                if(user)
                        userdatabase.follow.find({username:user.username},(err,docs)=>{
                            if(docs.length===0)
                            userdatabase.follow.insert({username:user.username,follows:[userdata.followid]})
                            if(docs.length===1)
                            userdatabase.follow.update({username:user.username},{username:user.username,follows:[...docs[0].follows,userdata.followid]})
                            res.end(JSON.stringify({follows:[...docs[0].follows,userdata.followid]}))
                        })
            })
            }catch{

                res.end(JSON.stringify({error:"wrong data"}))
            }
            
        }
        // if(q.pathname=="/test"){
        //     let data = ""
        //     req.on('data',(chunk)=>{
        //         data+=chunk
        //     })
        //     req.on('end',()=>{
        //         console.log(data)
        //     })
        // }
    }
}).listen(80)

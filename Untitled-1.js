const DataStore = require('nedb')
const test= new DataStore({filename:'path/likespost/likepost.db'})
test.loadDatabase()


// test.insert([{
//     name: "Central Park",
//     location: { type: "Point", coordinates: [ -73.97, 40.77 ] },
//     category: "Parks"
//  },
//  {
//     name: "Sara D. Roosevelt Park",
//     location: { type: "Point", coordinates: [ -73.9928, 40.7193 ] },
//     category: "Parks"
//  },
//  {
//     name: "Polo Grounds",
//     location: { type: "Point", coordinates: [ -73.9375, 40.8303 ] },
//     category: "Stadiums"
//  }])
// test.find(
//     {
//       location:
//         { $near:
//            {
//              $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
//              $minDistance: 1000,
//              $maxDistance: 5000
//            }
//         }
//     },(err,docs)=>{
//         console.log(docs)
//     }
//  )

test.find({username:"somsdfeting",likespost:"dfgdfasdfhjkjkasasdfsadfeting"},(err,docs)=>{
console.log(docs)
})
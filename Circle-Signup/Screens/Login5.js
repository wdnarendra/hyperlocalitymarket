import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const Login5 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 50,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 22,
            height: 0,
            backgroundColor: "#1569C7",
            borderWidth: 4,
            borderColor: "#fff",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 22,
            height: 0,
            backgroundColor: "#1569C7",
            borderWidth: 4,
            borderColor: "#fff",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 22,
            height: 0,
            backgroundColor: "#1569C7",
            borderWidth: 4,
            borderColor: "#263238",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 22,
            height: 0,
            backgroundColor: "#1569C7",
            borderWidth: 4,
            borderColor: "#fff",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 22,
            height: 0,
            backgroundColor: "#263238",
            borderWidth: 4,
            borderColor: "#fff",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <View style={styles.TopView}>
        <View style={styles.labels}>
          <Text style={styles.label}>
            {" "}
            Information sees no gender however we{"\n"}might need it for
            gender-specific content !
          </Text>
        </View>
      </View>
      <View style={styles.BottomView}>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/rafiki.png")}
        />
        <Image />

        <View style={styles.blocks}>
          <TouchableOpacity style={{ flexDirection: "column" }}>
            <View
              style={{
                backgroundColor: "#185ADB",
                height: 80,
                width: 80,
                borderRadius: 10,
                marginLeft: -10,
              }}
            >
              <Image
                style={styles.imageblocks}
                source={require("../assets/Male.png")}
              />
              <Text
                style={{ fontWeight: "600", fontSize: 16, top: 25, left: 20 }}
              >
                male
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#ED1FA7",
                height: 80,
                width: 80,
                borderRadius: 10,
                marginLeft: 50,
              }}
            >
              <Image
                style={styles.imageblocks}
                source={require("../assets/Female.png")}
              />
              <Text
                style={{ fontWeight: "600", fontSize: 16, top: 25, left: 15 }}
              >
                female
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 10,
                  marginLeft: 50,
                }}
                source={require("../assets/transback.png")}
              />
              <Image
                style={styles.imageblocksTrans}
                source={require("../assets/trans.png")}
              />
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  left: 70,
                  bottom: 50,
                }}
              >
                other
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => navigation.navigate("Login4")}
        >
          <Icon
            name="arrow-left"
            size={28}
            color={"#1569C7"}
            style={{ bottom: -6, marginRight: 10 }}
          />
          <Text style={styles.appButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate("Login6")}
        >
          <Text style={styles.appButtonText}>Next</Text>
          <Icon
            name="arrow-right"
            size={28}
            color={"#1569C7"}
            style={{ bottom: -6, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1569C7",
  },

  TopView: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomView: {
    width: "160%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
    top: -223,
    left: -5,
  },

  TextStyle: {
    color: "#fff",
    fontSize: 24,
    marginTop: 40,
    fontWeight: "600",
  },

  buttonStyle: {
    width: 280,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
  },

  label: {
    color: "#fff",
    fontSize: 14,
  },
  labels: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    top: -50,
  },
  input: {
    height: 45,
    width: 280,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    shadowOpacity: 1,
    shadowColor: "gray",
    shadowRadius: 1,
  },
  nameText: {
    color: "#1569C7",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "bold",
  },
  name: {
    display: "flex",
    alignItems: "flex-start",
    top: -40,
  },
  appButtonContainer: {
    left: 100,
    height: 60,
    width: 60,
    top: 40,
    display: "flex",
    flexDirection: "row",
  },
  appButtonText: {
    fontWeight: "400",
    fontSize: 24,
    color: "#1569C7",
  },
  appButtonContainer2: {
    left: -130,
    height: 60,
    width: 60,
    top: 100,
    display: "flex",
    flexDirection: "row",
    opacity: 0.5,
  },
  blocks: {
    flexDirection: "row",
    height: 110,
    width: 320,
  },
  imageblocks: {
    alignSelf: "center",
    top: 5,
  },
  imageblocksTrans: {
    alignSelf: "center",
    top: -70,
    left: 27,
  },
});

export default Login5;

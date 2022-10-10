import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login8 = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/amico.png")}
        />
        <Image />
      </View>
      <View style={styles.BottomView}>
        <Text
          style={{ color: "#fff", fontWeight: "700", fontSize: 18, top: 70 }}
        >
          Lets Connect & Grow Together !
        </Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "#1569C7",
                fontWeight: "600",
                fontSize: 20,
                alignSelf: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    top: 90,
  },
  button: {
    height: 50,
    width: 300,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  TopView: {
    backgroundColor: "#fff",
    width: "160%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 400,
  },
  appButtonContainer: {
    height: 50,
    width: 280,
    display: "flex",
    flexDirection: "row",
    borderColor: "red",
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
  },
  BottomView: {
    width: "160%",
    height: "50%",

    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 230,
    left: -10,
    marginLeft: 50,
  },

  TextStyle: {
    marginTop: 80,
    color: "#1569C7",
    fontSize: 24,
    fontWeight: "600",
    right: 80,
  },
  TextStyle1: {
    marginTop: 20,
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    right: 50,
  },
  buttonStyle: {
    width: 280,
    height: 50,
    borderRadius: 50,
    marginTop: -100,
    top: -80,
  },
  TextInpuView: {
    margin: 4,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(74, 141, 183, 0.14);",
  },
  appButtonText: {
    color: "#1569C7",
    marginLeft: 40,
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Login8;

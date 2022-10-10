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
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const Login2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <TouchableOpacity>
          <Icon
            onPress={() => navigation.navigate("Login")}
            name="arrow-left"
            size={28}
            color={"#fff"}
            style={{ position: "absolute", right: 170, bottom: 80 }}
          />
        </TouchableOpacity>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/logo4.png")}
        />
        <Image />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.TextStyle}>Enter OTP</Text>
        <Text style={styles.TextStyle1}>Verification code sent to</Text>
        <Text>""</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            top: -100,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
          <View style={styles.TextInpuView}>
            <TextInput />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: 255,
            margin: 10,
            marginBottom: 10,
          }}
        >
          <Text>Didn't recieve the code ?</Text>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="CONFIRM"
            onPress={() => navigation.navigate("Login3")}
          />
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
    backgroundColor: "#fff",
  },

  TopView: {
    backgroundColor: "#1569C7",
    width: "160%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
  },
  BottomView: {
    width: "160%",
    height: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 30,
    left: -10,
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
  },
});

export default Login2;

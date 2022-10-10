import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
const Login3 = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
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
            We'll need a few details to curate the {"\n"} {"            "}best
            experience for you !
          </Text>
        </View>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/man.png")}
        />
        <Image />
      </View>
      <View style={styles.BottomView}>
        <View style={styles.name}>
          <Text style={styles.nameText}>What is your name ?</Text>
          <TextInput
            withDarkTheme
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="LOKI ODINSON"
            withShadow
          />
        </View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate("Login4")}
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
    width: "100%",
    resizeMode: "contain",
    marginTop: 50,
    marginBottom: -200,
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
    fontSize: 16,
  },
  labels: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
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
    fontSize: 18,
    fontWeight: "700",
  },
  name: {
    display: "flex",
    alignItems: "flex-start",
    top: -40,
  },
  appButtonContainer: {
    left: 90,
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
});

export default Login3;

import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import CheckBox from "expo-checkbox";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setphoneNumber] = useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/yes.png")}
        />
        <Image />
        <Text style={styles.TextStyle}>Welcome to Circle !</Text>
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.phoneStyle}>Phone number</Text>
        <PhoneInput
          containerStyle={{ borderRadius: 10, color: "2px solid black" }}
          textContainerStyle={{ color: "blue" }}
          textInputStyle={{ padding: 0 }}
          codeTextStyle={{ color: "#1569C7", fontWeight: "600" }}
          flagButtonStyle={{ color: "#ffffff" }}
          style={styles.phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN"
          withDarkTheme
          withShadow
          onChangeFormattedText={(text) => {
            setphoneNumber(text);
          }}
        ></PhoneInput>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            //status={checked ? "true" : "false"}
            value={checked}
            onValueChange={() => setChecked(!checked)}
            //uncheckColor={"red"}
          />
          <Text style={styles.label}>
            I agree to the <Text style={styles.privacy}>Privacy Policy </Text>
            and <Text style={styles.privacy}>terms & {"\n"}conditions</Text>
          </Text>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            style={styles.buttonStyle}
            title="CONTINUE"
            onPress={() => navigation.navigate("Login2")}
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
    backgroundColor: "#1569C7",
  },

  TopView: {
    width: "100%",
    height: "50%",
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
    marginTop: 30,
  },

  TextStyle: {
    color: "#fff",
    fontSize: 24,
    marginTop: 40,
    fontWeight: "600",
  },
  phoneStyle: {
    position: "absolute",
    color: "#1569C7",
    fontSize: 18,
    marginTop: 40,
    fontWeight: "700",
    top: 40,
    left: 170,
    marginBottom: -20,
  },

  phoneInput: {
    marginLeft: 100,
    borderRadius: 100,
    border: "10px solid black",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  checkbox: {
    top: 30,
    alignSelf: "center",
    right: 15,
  },
  label: {
    fontSize: 15,
    top: 30,
  },
  privacy: {
    color: "#1569C7",
    fontSize: 15,
  },

  buttonStyle: {
    width: 280,
    height: 50,
    borderRadius: 30,
    top: 25,
    marginTop: 30,
  },
});

export default Login;

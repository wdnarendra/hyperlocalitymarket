import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
const Login7 = () => {
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
            borderColor: "#1569C7",
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
            borderColor: "#1569C7",
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
            borderColor: "#1569C7",
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
            borderColor: "#1569C7",
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
            borderColor: "#263238",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <View style={styles.labels}>
        <Text style={styles.label}>
          {"                  "}
          Not sure what to join ? {"\n"} Try checking these out from your
          locality
        </Text>
      </View>
      <View
        style={{ flexDirection: "column", marginTop: 20, marginBottom: -10 }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block4.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block5.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageblocks}
              source={require("../assets/block6.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.appButtonContainer1}
        onPress={() => navigation.navigate("Login8")}
      >
        <Text style={styles.appButtonText1}>Next</Text>
        <Icon
          name="arrow-right"
          size={28}
          color={"#1569C7"}
          style={{ bottom: -6, marginLeft: 10 }}
        />
      </TouchableOpacity>
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

  buttonStyle: {
    width: 280,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
  },

  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
  },
  labels: {},
  appButtonContainer: {
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    borderColor: "#1569C7",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
  },
  appButtonContainer1: {
    left: 110,
    height: 60,
    width: 60,
    top: 40,
    display: "flex",
    flexDirection: "row",
  },
  appButtonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#1569C7",
    marginRight: 10,
  },
  appButtonText1: {
    fontWeight: "400",
    fontSize: 24,
    color: "#1569C7",
  },
  appButtonContainer2: {
    left: -150,
    height: 60,
    width: 60,
    top: 103,
    display: "flex",
    flexDirection: "row",
    opacity: 0.5,
  },
  imageblocks: {
    marginLeft: 10,
    marginRight: 10,
    width: 180,
    height: 180,
    borderRadius: 10,
  },
});

export default Login7;

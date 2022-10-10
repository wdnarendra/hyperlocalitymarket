import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
const Login6 = () => {
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
            backgroundColor: "#263238",
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
            borderColor: "#1569C7",
            margin: 1,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <View style={styles.labels}>
        <Text style={styles.label}>
          {" "}
          Select your interest and you're ready{"\n    "}to enter the world of
          your choice !
        </Text>
      </View>
      <View
        style={{
          width: 300,
          height: 0,
          borderWidth: 0.5,
          borderColor: "#1569C7",
          top: -220,
        }}
      ></View>
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          top: 270,
          marginTop: -60,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, marginRight: 10, left: 2 }}
            />
            <Text style={styles.appButtonText}>Education</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Technology</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Ayurveda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, marginRight: 10, left: 2 }}
            />
            <Text style={styles.appButtonText}>Art</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Entertainment</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, marginRight: 10, left: 2 }}
            />
            <Text style={styles.appButtonText}>Startup</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Fun</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <TouchableOpacity style={styles.appButtonContainer}>
            <Icon
              name="plus"
              size={23}
              color={"#1569C7"}
              style={{ bottom: -6, left: 2, marginRight: 10 }}
            />
            <Text style={styles.appButtonText}>Travel and Tourism</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#1569C7", top: 10 }}>
          <FontAwesome5
            name="info-circle"
            size={20}
            color={"#1569C7"}
            style={{ bottom: -20, left: 2, marginRight: 20 }}
          />
          {"     "}Choose atleast <Text style={{ color: "#000" }}>3</Text>{" "}
          interests
        </Text>
      </View>
      <View style={{ top: 270 }}>
        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => navigation.navigate("Login5")}
        >
          <Icon
            name="arrow-left"
            size={28}
            color={"#1569C7"}
            style={{ bottom: -6, marginRight: 10 }}
          />
          <Text style={styles.appButtonText1}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer1}
          onPress={() => navigation.navigate("Login7")}
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
  labels: {
    top: -250,
  },
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
});

export default Login6;

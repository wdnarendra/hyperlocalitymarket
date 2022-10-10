import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const Login4 = () => {
  const [showModal, setShowModal] = React.useState(false);
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
          <Text style={styles.label}>Get in touch with your peers !</Text>
        </View>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/bro.png")}
        />
        <Image />
      </View>
      <View style={styles.BottomView}>
        <View style={styles.name}>
          <Text style={styles.nameText}>Birthday</Text>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={{
              backgroundColor: "#F2F2F2",
              borderRadius: 10,
              width: 300,
              height: 45,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 22 }}>
              {/* Date to be entered here*/}
            </Text>
            <Icon
              name="calendar"
              size={30}
              color={"#1569C7"}
              style={{ left: 260, top: -28 }}
            />
          </TouchableOpacity>
          <Modal visible={showModal} animationType="fade">
            <Calendar
              style={{ borderRadius: 10, elevation: 4, margin: 40 }}
              onDayPress={(date) => {
                {
                  /* function to get the date*/
                }
                console.log(date);
                setShowModal(false);
              }}
              markingType={"multi-dot"}
            />
          </Modal>
        </View>
        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => navigation.navigate("Login3")}
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
          onPress={() => navigation.navigate("Login5")}
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
    top: 145,
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
});

export default Login4;

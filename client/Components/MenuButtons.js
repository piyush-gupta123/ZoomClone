import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];
const MenuButtons = ({ navigation }) => {

  const openMeeting = ()=>{
    navigation.navigate("Room")
  }
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonConatiner}>
          <TouchableOpacity
            onPress={()=>openMeeting()}
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470DC",
            }}
          >
            <FontAwesome name={item.name} color="#efefef" size={23} />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
  },
  buttonConatiner: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
});

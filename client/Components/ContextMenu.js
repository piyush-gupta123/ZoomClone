import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contacts = [
  {
    type: "starred",
  },
  {
    type: "contact",
    name: "Jessy The",
    image: require("../assets/jessy_the.jpeg"),
  },
  {
    type: "contact",
    name: "Nazariy Dumanskyy",
    image: require("../assets/naz.jpeg"),
  },
  {
    type: "contact",
    name: "Rafeh Qazi",
    image: require("../assets/rubeh.jpeg"),
  },
];

const ContextMenu = () => {
  return (
    <View style={styles.container}>
      {contacts.map((item,index)=>
        <View key={index} style={styles.buttonContainer}>
          {item.type == "starred"? 
            (<View style={styles.icon}>
              <AntDesign
                name="star"
                size={30}
                color={"#efefef"}
              />
            </View>):
            (
              <Image source={item.image} style={styles.image} />
            )
          }
          
          
          <Text 
          style={styles.text}>
            {item.type==="starred"? "Starred": item.name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ContextMenu;

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 20,
  }
});

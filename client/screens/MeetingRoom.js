import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from "../Components/Chat";
import Modal from "react-native-modal"

let socket;

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    Customcolor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

const MeetingRoom = () => {
  const [name, setName] = useState();
  const [roomId, SetRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const StartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status == "granted") {
      setStartCamera(true);
    } else {
      // alert("Access Denied");
    }
  };

  const joinRoom = () => {
    StartCamera();
    socket.emit("join-room", { roomId: roomId, username: name });
  };

  useEffect(() => {
    socket = io("https://66aa-2405-201-680b-3e00-3005-ee0e-9a02-7eb4.in.ngrok.io");
    console.log("Hello");
    socket.on("connection", () => {
      console.log("connected");
    });
    socket.on("all-users", (users) => {
      console.log("Active Users");
      console.log(users);
      setActiveUsers(users);
    });
  }, []);
  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent= {false}
            // presentationStyle="fullScreen"
            visible={modalVisible}
            onRequestClose={()=>{
              setModalVisible(!modalVisible)
            }}
            style={{margin: 0}}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
            {/* <Text>Hello!!!</Text> */}
          </Modal>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 667 : 200,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.username != name)
                .map((user, index) => (
                  <View style={styles.activeUserContainer} key={index}>
                    <Text style={{ color: "white" }}>{user.username}</Text>
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.menu}>
            {menuIcons.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tile}
              >
                <FontAwesome name={item.name} size={23} color="white" />
                <Text style={styles.textTile}>{item.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.tile}
              onPress={()=>setModalVisible(true)}
            >
                <FontAwesome name={"comment"} size={23} color="white" />
                <Text style={styles.textTile}>Chat</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          SetRoomId={SetRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 5,
    height: 80,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  tile: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 15,
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  cameraContainer: {
    backgroundColor: "black",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  activeUserContainer: {
    borderWidth: 2,
    borderColor: "gray",
    height: 205,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

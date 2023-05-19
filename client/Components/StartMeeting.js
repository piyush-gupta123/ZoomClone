import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StartMeeting = ({name, setName, roomId, SetRoomId, joinRoom}) => {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(val) => setName(val)}
          placeholder="Enter Name"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          onChangeText={(val) => SetRoomId(val)}
          placeholder="Enter Room ID"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 2 }}>
        <TouchableOpacity onPress={()=>joinRoom()}  style={styles.startMeeting}>
          <Text style={{ color: "white", fontSize: 19, fontWeight: "600" }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373838",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeeting: {
    backgroundColor: "#0470DC",
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 50,
    borderRadius: 20,
  },
});

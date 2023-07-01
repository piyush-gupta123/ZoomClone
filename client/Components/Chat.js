import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ setModalVisible }) => {
  const [messages, setMessages] = useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
              <ChatHeader setModalVisible={setModalVisible} />
              <View style={styles.chatMessages}></View>
              <View style={styles.chatFontContainer}>
                <Text style={{ color: "white" }}>Send To: Everyone</Text>
                <View style={styles.chatForm}>
                  <TextInput
                    value={messages}
                    style={styles.textInput}
                    onChange={(text) => setMessages(text)}
                    placeholder="Type  here to chat"
                    placeholderTextColor="#585958"
                  />
                  <TouchableOpacity
                    style={{
                      ...styles.buttonStyle,
                      backgroundColor: messages ? "#0B71EB" : "#373838",
                    }}
                  >
                    <FontAwesome name="send" color={"white"} size={18} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  buttonStyle: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  chatFontContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 2,
    padding: 12,
  },
  textInput: {
    height: 40,
    color: "#efefef",
    borderColor: "#585958",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginTop: 12,
    flex: 1,
  },
  chatForm: {
    flexDirection: "row",
  },
  chatMessages: {
    flex: 1,
  },
});

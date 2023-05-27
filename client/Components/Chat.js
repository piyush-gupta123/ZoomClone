import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import ChatHeader from "./ChatHeader";

const Chat = ({ setModalVisible }) => {
  const [messages, setMessages] = useState("");
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <ChatHeader setModalVisible={setModalVisible} />
        <View style={styles.chatMessages}></View>
        <View style={styles.chatFontContainer}>
          <Text style={{ color: "white" }}>Send To: EveryOne</Text>
          <View style={styles.chatForm}>
            <TextInput
              style={styles.textInput}
              onChange={(text) => setMessages(text)}
              value={messages}
              placeholder="Type  here to chat"
            />
          </View>
        </View>
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
  buttonInput: {},
  chatFontContainer: {},
});

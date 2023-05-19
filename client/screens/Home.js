import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import MenuButtons from "../Components/MenuButtons";
import ContextMenu from "../Components/ContextMenu";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContextMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/header";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default Home;

import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logopq from "../../../assets/img/logo-pq.png";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Image source={logopq} style={styles.logo} />
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row"
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  }
});

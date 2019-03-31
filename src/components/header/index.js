import React, { Component } from "react";
import { View, Dimensions, Image, StyleSheet, TextInput } from "react-native";
import logopq from "../../../assets/img/logo-pq.png";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={{ width: 50 }}>
          <Image source={logopq} style={styles.logo} />
        </View>
        <View style={styles.search}>
          <TextInput style={styles.input} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  search: {
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "center",
    height: 50
  },
  input: {
    width: Dimensions.get("window").width - 100,
    marginTop: 5,
    height: 45,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    shadowColor: "#000",
    elevation: 4
  }
});

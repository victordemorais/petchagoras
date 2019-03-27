import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TabBar = props => (
  <View style={styles.container}>
    {props.navigation.state.routes.map(route => {
      return (
        <View key={route.key}>
          <Text style={{ color: "#fff" }}>{route.routeName}</Text>
        </View>
      );
    })}
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#cdcdcd",
    justifyContent: "center",
    paddingBottom: 0
  }
});

export default TabBar;

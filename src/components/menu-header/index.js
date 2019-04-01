import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const MenuHeader = props => {
  return (
    <View style={styles.content}>
      <View style={styles.buttonContent}>
        <TouchableOpacity
          onPress={() => alert("hello world!")}
          style={[
            styles.button,
            { borderRightWidth: 1, borderRightColor: "#fff" }
          ]}
        >
          <Text style={styles.text}>Cachorros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("hello world!")}
          style={{
            width: "33.3%",
            height: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>Gatos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("hello world!")}
          style={[
            styles.button,
            { borderLeftWidth: 1, borderLeftColor: "#fff" }
          ]}
        >
          <Text style={styles.text}>Outros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    width: "100%"
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff7c48",
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 4,
    height: 50
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    width: "33.3%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MenuHeader;

import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

class BoxContent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.name}</Text>
        <View style={styles.box}>
          {this.props.data.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={styles.boxImage}
              onPress={() => alert("Hello world!")}
            >
              <Image source={data.path} style={styles.image} />
            </TouchableOpacity>
          ))}

          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#e5e5e5",
    borderRadius: 3,
    padding: 10,
    position: "relative"
  },
  boxImage: {
    borderRadius: 3,
    marginRight: 10,
    backgroundColor: "#fff"
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },
  text: {
    fontSize: 16,
    marginBottom: 3
  }
});

export default BoxContent;

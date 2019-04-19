import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";

class BoxContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>{this.props.name}</Text>
        <View style={styles.box}>
          <FlatList
            data={this.props.data}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              console.log(index);
              return (
                <TouchableOpacity
                  style={styles.boxImage}
                  onPress={() =>
                    this.props.navigation.navigate("ProductDescription", {
                      id: item.id
                    })
                  }
                >
                  <Image source={item.path} style={styles.image} />
                </TouchableOpacity>
              );
            }}
          />
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
    padding: 10,
    borderRadius: 3,
    marginRight: 10,
    backgroundColor: "#fff"
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  text: {
    fontSize: 16,
    marginBottom: 3
  }
});

export default BoxContent;

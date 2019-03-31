import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/header";
import BoxContent from "../../components/boxcontent";
import casinha from "../../../assets/img/casinha.png";
import logo from "../../../assets/img/logo-pq.png";

const data = [
  {
    path: casinha
  },
  {
    path: casinha
  },
  {
    path: logo
  }
];

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ marginTop: 20 }}>
          <BoxContent data={data} name="Acessórios" />
        </View>
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

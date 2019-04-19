import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/header";
import BoxContent from "../../components/boxcontent";
import casinha from "../../../assets/img/casinha.png";
import logo from "../../../assets/img/logo-pq.png";
import MenuHeader from "../../components/menu-header";

const data = [
  {
    id: "1",
    path: casinha
  },
  {
    id: "2",
    path: casinha
  },
  {
    id: "3",
    path: logo
  },
  {
    id: "4",
    path: logo
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <MenuHeader />
        <View style={{ paddingRight: 10, paddingLeft: 10 }}>
          <BoxContent
            data={data}
            navigation={this.props.navigation}
            name="Acessórios"
          />
          <BoxContent data={data} name="Aves" />
          <BoxContent data={data} name="Dogão" />
          <BoxContent data={data} name="Salsicha" />
          <BoxContent data={data} name="Pão" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Home;

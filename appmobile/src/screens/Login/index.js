import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import InputMask from "../../components/input-mask";
import logo from "../../../assets/img/logo-pq.png";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    login: "",
    password: ""
  };
  login() {
    if (this.state.login.length > 4 && this.state.password.length > 4) {
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Ooops!",
        "Seu login/password deve conter no mínimo 4 caractéres!"
      );
    }
  }
  register() {
    this.props.navigation.navigate("SignUp");
  }
  render() {
    return (
      // <ImageBackground source={logo} opacity={0.2} style={{width: '100%', height: '100%'}}>
      <ScrollView style={styles.stylesLogin}>
        <Image style={styles.img} source={logo} />
        <Text style={styles.text}> Login </Text>
        <InputMask
          placeholder="Login"
          onChangeText={login => this.setState({ login })}
        />
        <InputMask
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        {/*  <Button title="Entrar" color="#ff7c48">  </Button>*/}
        <TouchableOpacity onPress={() => this.login()}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.register()}>
          <Text style={styles.btnText}>Registrar</Text>
        </TouchableOpacity>
      </ScrollView>
      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  stylesLogin: {
    marginTop: 60
  },
  text: {
    margin: 10,
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#ff7c48"
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center"
    //opacity:0.5
  },
  btnText: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#ff7c48"
  }
});

export default Login;

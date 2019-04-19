import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import InputMask from "../../components/input-mask";



class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <View style={styles.stylesLogin}>
                <Text style={styles.text}> Login </Text>
                <InputMask placeholder="Login"  />
                <InputMask placeholder="Senha" />
                <Button title="Entrar" color="orange">  </Button>
            </View>

        )
    }

}

const styles=StyleSheet.create({
   stylesLogin: {
    
   } ,
   text: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})


export default Login

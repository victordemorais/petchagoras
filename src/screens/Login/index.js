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
                <InputMask label="Login"  />
                <InputMask label="Senha" />
                <Button title="Entrar" color="orange">  </Button>
            </View>

        )
    }

}

const styles=StyleSheet.create({
   stylesLogin: {
    
   } 
})


export default Login



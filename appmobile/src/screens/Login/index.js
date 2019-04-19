import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image, ImageBackground,TouchableOpacity } from "react-native";
import InputMask from "../../components/input-mask";
import logo from "../../../assets/img/logo-pq.png";


class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            // <ImageBackground source={logo} opacity={0.2} style={{width: '100%', height: '100%'}}>
            <View style={styles.stylesLogin}>
                <Image style={styles.img} source={logo} />
                <Text style={styles.text}> Login </Text>
                <InputMask placeholder="Login" />
                <InputMask placeholder="Senha" />
             {/*  <Button title="Entrar" color="#ff7c48">  </Button>*/}
                <TouchableOpacity onPress={this._entrar}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            // </ImageBackground> 
        )
    }

}


const styles = StyleSheet.create({
    stylesLogin: {
        marginTop: 60

    },
    text: {
        margin:  10, 
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "#ff7c48"

    },
    img: {
        width: 150,
        height: 150,
        alignSelf: "center"
        //opacity:0.5
    },
    btnText:{
        margin:  10, 
        fontSize: 25,
       fontWeight: 'bold',
        alignSelf: 'center',
        color: "#ff7c48"
    }
    
})


export default Login

import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import InputMask from "../../components/input-mask";


class Contato extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <View style={styles.stylesContato}>
                <InputMask refInput='email' label="Email" maxLength={25} placeholder="Email"  />
                <Button title="Enviar" color="orange">  </Button>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    stylesContato: {
        margin: 30,
        justifyContent: 'center',
    } 
 })
 
 
 export default Contato
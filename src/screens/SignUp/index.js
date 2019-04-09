import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import InputMask from "../../components/input-mask";

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, 'Vamos ver o que ta chegando aqui')

    this._confirmaSenha = this._confirmaSenha.bind(this)
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  _confirmaSenha() {

    this.psw === this.confPsw ? (Alert.alert('Cadastro realizado!')): (Alert.alert('Senhas não conferem!'))
      
  }
  _equeciSenha() {
    Alert.alert('Esqueci minha senha!')
  }

  render() {
    return (
      <View >
        <Text style={styles.text}>Registrar</Text>

        <View style={styles.container}>
          {/* Mano , refInput ele recebe uma função por isso ta dando pau ai rs . tenho que mandar por função o refinput exato , vai fazer tipo 
            (value) => this.input(value) 
            // so n lembro como utilizar direito 
            pera ai rapidão 
           */}
          <InputMask
            refInput={(nome) => this.nome = nome}
            onSubmitEditing={(cpf) => this.cpf.focus()}
            mask={"[AAAaaaaaaaaaaaaaa]"}maxLength={25} placeholder="Nome" />

          <InputMask
            refInput={(cpf) => this.cpf = cpf}
            onSubmitEditing={(email) => this.email.focus()}
            mask={"[000]{.}[000]{.}[000]{-}[00]"} placeholder="CPF" keyboardType="numeric" />

          <InputMask refInput={(email) => this.email = email}
            onSubmitEditing={(psw) => this.psw.focus()}
            placeholder="Email" keyboardType="email-address" />

          <InputMask refInput={(psw) => this.psw = psw}
            onSubmitEditing={(confPsw) => this.confPsw.focus()} 
            placeholder="Senha" secureTextEntry={true} />

          <InputMask refInput={(confPsw) => this.confPsw = confPsw}
            placeholder="Confirmar Senha" secureTextEntry={true} />

          <TouchableOpacity onPress={this._confirmaSenha} style={styles.btn}>
            <Text style={styles.btnText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._equeciSenha}>
            <Text style={{ alignSelf: 'center' }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    justifyContent: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 8,
    marginBottom: 10,
    width: "33.3%",
    alignItems: "center",
    alignSelf: 'center',
    elevation: 2,
    borderRadius: 4,
    padding: 5,
    backgroundColor: '#ff7c48'
  },
  btnText: {
    fontSize: 20,
    color: '#FFFF',
  }
})


export default SignUp



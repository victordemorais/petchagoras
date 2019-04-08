import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import InputMask from "../../components/input-mask";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this._registro = this._registro.bind(this)
  }
  _registro() {

    const newAccount = {
      nome: this.refInput.nome.value,
      CPF: this.refInput.CPF.value,
      email: this.refInput.email.value,
      psw: this.refInput.psw.value,
      confPsw: this.refInput.confPsw.value
    }
    if (newAccount.psw == newAccount.confPsw){
      Alert.alert('Cadastro realizado!')
    }
    else
      Alert.alert('Senha não confere!')
  }
  _equeciSenha() {
    Alert.alert('Esqueci minha senha!')
  }

  render() {
    return (
      <View >
        <Text style={styles.text}>Registrar</Text>

        <View style={styles.container}>

          <InputMask label="Nome" maxLength={25} placeholder="Nome" refInput='nome' />
          <InputMask label="CPF" mask={"[000]{.}[000]{.}[000]{-}[00]"} placeholder="CPF" keyboardType="numeric" refInput={'CPF'} />
          <InputMask placeholder="Email" keyboardType="email-address" refInput='email' />
          <InputMask placeholder="Senha" secureTextEntry={true} refInput={'psw'} />
          <InputMask placeholder="Confirmar Senha" secureTextEntry={true} refInput={'confPsw'} />

          <TouchableOpacity onPress={this._registro} style={styles.btn}>
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



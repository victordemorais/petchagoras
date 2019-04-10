import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import InputMask from "../../components/input-mask";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome:'', 
      cpf: '',
      email:'',
      psw:'',
      confPsw:''
    }

    //console.log(this.props, 'Vamos ver o que ta chegando aqui')
    console.log(this.state.nome, 'state')

    this._confirmaSenha = this._confirmaSenha.bind(this)
    this.focusNextField = this.focusNextField.bind(this)
    //this.handleInputChange = this.handleInputChange.bind(this)
    this.inputs = {};
  }

  /** handleInputChange(event){
    const target = event.target
    const value = target.type
    const name = target.name

    this.setState({
      [name]:value
    })
  }*/

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
          <Text>Nome:{this.state.nome} </Text>

          <TextInput onChangeText={(nome) => this.setState({nome})}/>

          <InputMask
            refInput={(nome) => this.nome = nome}
            onSubmitEditing={(cpf) => this.cpf.focus()}
            onChangeText={(nome) => this.setState({nome})}
            maxLength={25} placeholder="Nome" />

          <InputMask
            refInput={(cpf) => this.cpf = cpf}
            onSubmitEditing={(email) => this.email.focus()}
            mask={"[000]{.}[000]{.}[000]{-}[00]"} placeholder="CPF" keyboardType="numeric"  />

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



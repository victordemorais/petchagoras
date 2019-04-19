import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import InputMask from "../../components/input-mask";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cpf: "",
      email: "",
      psw: "",
      confPsw: ""
    };

    this._confirmaSenha = this._confirmaSenha.bind(this);
    this.focusNextField = this.focusNextField.bind(this);

    this.inputs = {};
  }


  focusNextField(id) {
    this.inputs[id].focus();
  }

  _confirmaSenha() {
    this.state.psw === this.state.confPsw
      ? Alert.alert("Cadastro realizado!")
      : Alert.alert("Senhas não conferem!");
  }
  _equeciSenha() {
    Alert.alert("Esqueci a minha senha!");
  }
            /* 
            InputMask que vai tratar os inputs, definindo por props quais serão as caracteristicas do input 
            onChangeText recebe o valor digitado e altera o state dessa classe
            refInput recebe um valor como referencia (no primeiro caso, nome) 
            preenchendo o input ao clicar "enter", o onSubmit seleciona o foco para o próximo input que foi referenciado (no primeiro caso, cpf)
            maxLenght define que o campo só pode ter 25 caracteres   
            placeholder escreve dentro do input como texto padrão
            keyboardType define o tipo de teclado que aparece pro usuario
            secureTextEntry quando "true" define que o texo precisa de segurança, como senha, e escreve * no campo
            */
  render() {
    return (
      <View>
        <Text style={styles.text}>Registrar</Text>

        <View style={styles.container}>

          <InputMask
            onChangeText={nome => this.setState({ nome })}
            refInput={nome => (this.nome = nome)}
            onSubmitEditing={cpf => this.cpf.focus()}
            maxLength={25}
            placeholder="Nome"
          />

          <InputMask
            onChangeText={cpf => this.setState({ cpf })}
            refInput={cpf => (this.cpf = cpf)}
            onSubmitEditing={email => this.email.focus()}
            mask={"[000]{.}[000]{.}[000]{-}[00]"}
            placeholder="CPF"
            keyboardType="numeric"
          />

          <InputMask
            refInput={email => (this.email = email)}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={psw => this.psw.focus()}
            placeholder="Email"
            keyboardType="email-address"
          />

          <InputMask
            onChangeText={psw => this.setState({ psw })}
            refInput={psw => (this.psw = psw)}
            onSubmitEditing={confPsw => this.confPsw.focus()}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <InputMask
            onChangeText={confPsw => this.setState({ confPsw })}
            refInput={confPsw => (this.confPsw = confPsw)}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
          />

          <TouchableOpacity onPress={this._confirmaSenha} style={styles.btn}>
            <Text style={styles.btnText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._equeciSenha}>
            <Text style={{ alignSelf: "center" }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    justifyContent: "center"
  },
  text: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center"
  },
  btn: {
    marginTop: 8,
    marginBottom: 10,
    width: "33.3%",
    alignItems: "center",
    alignSelf: "center",
    elevation: 2,
    borderRadius: 4,
    padding: 5,
    backgroundColor: "#ff7c48"
  },
  btnText: {
    fontSize: 20,
    color: "#FFFF"
  }
});

export default SignUp;

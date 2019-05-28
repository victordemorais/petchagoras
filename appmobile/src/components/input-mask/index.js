import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TextInputMask from "react-native-text-input-mask";

/*click+ctrl no TextInputMask abre as a classe TextInputMask, onde é possivel visualizar as propriedades que podem ser utilizadas.
Para adicionar uma prorpriedade de TextInputMask informe o nome da propriedade, e ela deve receber um props da classe que a utilizar

exemplo:
onChangeText={props.onChangeText}
a pripriedade onChangeText de outra classe é recebida como onChangeText aqui.
*/

const InputMask = props => {
  console.log(props.refInput);
  return (
    <View>
      <TextInputMask
        style={styles.input}
        refInput={props.refInput}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
        mask={props.mask}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    width: "100%",
    height: 40,
    borderRadius: 4,
    borderColor: "#ccc",
    shadowColor: "#000",
    elevation: 2
  }
});
export default InputMask;

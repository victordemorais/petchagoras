import React from "react"
import { StyleSheet, View, Text } from "react-native"
import TextInputMask from 'react-native-text-input-mask';


const InputMask = (props) => {
   
    console.log(props.refInput)
    return(
    <View>
        {/*<Text>{props.label}</Text> **/}
        <TextInputMask style={styles.input}

            refInput={props.refInput}
            onSubmitEditing={props.onSubmitEditing}

            onChangeText={(formatted, extracted) => {
                console.log(formatted) // exemplo +1 (123) 456-78-90 mask= +1 ([000]) [000] [00] [00]
                console.log(extracted) // exemplo 1234567890
            }}
            
            mask={props.mask}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            
        />
    </View>
)}
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
})
export default InputMask


import React from "react"
import { StyleSheet, View, Text } from "react-native"
import TextInputMask from 'react-native-text-input-mask';


const InputMask = (props) => (
    <View>
        <Text>{props.label}</Text>
        <TextInputMask style={styles.input}
            refInput={ref => { this.input = ref }}
            onChangeText={(formatted, extracted) => {
                console.log(formatted) // +1 (123) 456-78-90
                console.log(extracted) // 1234567890
            }}
            mask={"+1 ([000]) [000] [00] [00]"}
        />
    </View>
)
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        width: "100%",
        height: 50,
        borderRadius: 4,
        borderColor: "#ccc",
        shadowColor: "#000",
        elevation: 2
    }
})
export default InputMask


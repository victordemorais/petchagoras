import React,{Component} from "react"
import { StyleSheet, View, Text } from "react-native"
import TextInputMask from 'react-native-text-input-mask';

export default class InputMask extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    onSubmitEditing() {
        this.props.onSubmitEditing();
    }

    focus() {
        this.textInput.focus()
    }


    render() {
        return (
            <TextInputMask style={styles.input}

                //refInput={ref => { this.input = ref }}
                refInput={input => this.textInput = input}
                onSubmitEditing={this.onSubmitEditing.bind(this)}
                onChangeText={(formatted, extracted) => {
                    console.log(formatted) // exemplo +1 (123) 456-78-90 mask= +1 ([000]) [000] [00] [00]
                    console.log(extracted) // exemplo 1234567890
                }}

                mask={this.props.mask}
                placeholder={this.props.placeholder}
                maxLength={this.props.maxLength}
                keyboardType={this.props.keyboardType}
                secureTextEntry={this.props.secureTextEntry}
            />
        )
    }

}


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


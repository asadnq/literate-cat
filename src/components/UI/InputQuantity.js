import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Button, Icon, Item, Input } from 'native-base';


const InputQuantity = props => {
    /*
    * props:
    *onMinPressed : function(decrease val)
    *onPlusPressed: function(increase val)
    *val: number
    */
    const { inputContainer, buttonStyle,inputWrapper, inputStyle } = styles;

    return(
        <View style={inputContainer}>
            <Button style={buttonStyle} onPress={props.onMinPressed}>
                <Icon name='minus' type="FontAwesome"/>
            </Button>
            <Item style={inputWrapper}>
                <Input style={inputStyle} placeholder='quantity' value={props.value}/>
            </Item>
            <Button style={buttonStyle} onPress={props.onPlusPressed}>
                <Icon name='plus' type="FontAwesome"/>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row'
    },
    buttonStyle: {
        width: 50,
        backgroundColor: '#006494'
    },
    inputWrapper: {
        width: 50,
        textAlign: 'center'
    },  
    inputStyle: {
        width: 100
    }
})
export default InputQuantity;
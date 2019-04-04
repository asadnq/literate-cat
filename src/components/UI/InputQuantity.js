import React from 'react';
import { StyleSheet, View,TextInput } from 'react-native';
import { Form, Button, Icon, Item, Input } from 'native-base';


const InputQuantity = props => {
    /*
    * props:
    *onMinPressed : function(decrease val)
    *onPlusPressed: function(increase val)
    *val: number
    */
    const { inputContainer, buttonStyle,inputWrapper, inputStyle, iconStyle } = styles;

    return(
        <View style={inputContainer}>
            <Button style={buttonStyle} onPress={props.onMinPressed} bordered>
                <Icon style={iconStyle}name='minus' type="FontAwesome"/>
            </Button>
            <Item style={inputWrapper}>
                <TextInput style={inputStyle} textAlign={'center'} keyboardType='number-pad'
 value={props.value} onChangeText={props.onChangeText}/>
            </Item>
            <Button style={buttonStyle} onPress={props.onPlusPressed} bordered>
                <Icon style={iconStyle} name='plus' type="FontAwesome"/>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    buttonStyle: {
        width: 35,
        height: 35,
        borderColor: '#006494',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapper: {
        width: 50,
        height: 35
    },  
    inputStyle: {
        width: 50,
        height: 35
    },
    iconStyle: {
        fontSize: 16,
        color: '#006494',
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 0
    }
})
export default InputQuantity;
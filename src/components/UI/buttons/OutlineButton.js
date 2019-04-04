import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';

const OutlineButton = props => {
    return(
    <Button bordered style={[styles.buttonStyle,{ backgroundColor: props.color}, props.buttonStyle]} {...props}>
        {props.icon}
        <Text style={[styles.textStyle, props.titleStyle]}>{props.title}</Text>
    </Button>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: '#006494'
    },
    textStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#006494'
    }
})


export default OutlineButton;
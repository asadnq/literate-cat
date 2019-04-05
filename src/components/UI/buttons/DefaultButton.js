import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';

const DefaultButton = props => {
    return(
    <Button  {...props} style={[styles.buttonStyle, props.style]}>
        {props.icon}
        <Text style={[styles.textStyle, props.titleStyle]}>{props.title}</Text>
    </Button>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#006494'
    },
    textStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#FFF',
        textTransform: 'lowercase'
    }
})


export default DefaultButton;
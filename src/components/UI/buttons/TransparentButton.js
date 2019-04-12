import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'native-base';

const TransparentButton = props => {
    return(
        <Button transparent {...props} style={[styles.buttonStyle, props.style]}>
            {props.icon}
            <Text numberOfLines={2} style={[styles.textStyle, props.titleStyle]}>{props.title}</Text>
        </Button>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#006494',
        fontFamily: 'Lato-Regular',
        textTransform: 'lowercase'
    }
})


export default TransparentButton;
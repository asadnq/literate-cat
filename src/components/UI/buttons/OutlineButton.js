import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'native-base';

const OutlineButton = props => {
    return(
        <Button bordered {...props} style={[styles.buttonStyle,{ borderColor: props.color}, props.style]}>
            {props.icon}
            <Text numberOfLines={2} style={[styles.textStyle, props.titleStyle]}>{props.title}</Text>
        </Button>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        borderColor: '#006494'
    },
    textStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#006494',
        fontFamily: 'Lato-Regular',
        textTransform: 'lowercase'
    }
})


export default OutlineButton;
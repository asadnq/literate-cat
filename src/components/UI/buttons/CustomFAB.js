import React from 'react';
import { View, Button, StyleSheet, TouchableNativeFeedback } from 'react-native';


const CustomFAB = props => {
    return(
        <TouchableNativeFeedback style={[styles.customFAB,{...props.style}]}>
            {props.children}
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    customFAB: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        borderRadius: 100,
    }
});

export default CustomFAB;
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';


const CustomFAB = props => {
    return(
        <TouchableOpacity style={[styles.customFAB,{...props.style}]} {...props}>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customFAB: {
        alignItems:'center',
        justifyContent:'center',
        width:53,
        height:53,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        backgroundColor:'#006494',
        borderRadius:30,
        elevation: 3
    }
});

export default CustomFAB;
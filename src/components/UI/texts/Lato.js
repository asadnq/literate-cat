import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Lato = props => (
    <Text style={[styles.lato, props.style]}>{props.children}</Text>
)


const styles = StyleSheet.create({
    lato: {
        fontFamily: 'Lato-Regular'
    }
})


export default Lato;
import React from 'react'
import { Text, StyleSheet } from 'react-native';

const Rubik = props => (
    <Text style={[styles.rubik, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    rubik: {
        fontFamily: 'Rubik-Regular',
        color: '#0D1B2A'
    }
})

export default Rubik;

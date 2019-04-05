import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Philosopher = props => (
    <Text {...props} style={[styles.philosopher, props.style]}>{props.children}</Text>
)


const styles = StyleSheet.create({
    philosopher: {
        fontFamily: 'Philosopher-Regular',
        color: '#252422'
    }
})


export default Philosopher;
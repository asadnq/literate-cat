import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Raleway = props => (
    <Text style={[styles.raleway, props.style]}>{props.children}</Text>
)


const styles = StyleSheet.create({
    raleway: {
        fontFamily: 'Raleway'
    }
})


export default Raleway;
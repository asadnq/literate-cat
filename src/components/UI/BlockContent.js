import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const TextBlock = props => {
    return(
        <Container style={[styles.containerStyle, props.style]}>
            {props.children}
        </Container>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TextBlock;
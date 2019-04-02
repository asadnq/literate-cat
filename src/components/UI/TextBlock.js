import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const TextBlock = props => {
    return(
        <Container style={{justifyContent: 'center'}}>
            <Text style={styles.textStyle}>{props.text}</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color: '#AAA',
        textAlign: 'center'
    }
});

export default TextBlock;
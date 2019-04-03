import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const TextBlock = props => {
    return(
        <Container style={{justifyContent: 'center'}}>
            {props.iconTop}
            <Text style={styles.textStyle}>{props.text}</Text>
            {props.iconBottom}
        </Container>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color: '#AAA',
        textAlign: 'center',
        
    }
});

export default TextBlock;
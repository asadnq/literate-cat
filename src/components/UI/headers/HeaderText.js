import React from 'react';
import Lato from '../texts/Lato';
import { Container, Card, CardItem } from 'native-base';
import { StyleSheet } from 'react-native';

const HeaderText = props => (
    <Container style={styles.containerStyle}>
        <Lato style={styles.textStyle}>{props.children}</Lato>
    </Container>
)

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 8,
        height: 20,
        backgroundColor: '#006494',
        alignItems: 'center'
    },
    cardStyle: {
        padding: '4%',
    },
    textStyle: {
        fontSize: 21,
        color: '#F4F3EE',
        textAlign: 'center'
    }
    
})

export default HeaderText;
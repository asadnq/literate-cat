import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Container, Body, Card, CardItem, Button } from 'native-base';


const ProductCard = props => {
    return (
    <Card style={styles.cardCustom}>
        <CardItem header style={styles.cardHeader}>
            <Body style={{flex: 1,flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.title}>{props.title}</Text>
            </Body>
        </CardItem>
        <CardItem cardBody button onPress={props.action}>
            <Image source={props.image} style={{width: '100%', height: 150}}/>
        </CardItem>
        <CardItem style={styles.cardButton} button onPress={() => alert('O_O')}>
            <Text style={styles.buttonText}>buy</Text>
        </CardItem>
    </Card>
    );
}

const styles = StyleSheet.create({
    cardCustom: {
        width: '100%',
        padding: 0
    },
    cardHeader: {
        height: 28,
        alignItems: 'baseline',
        paddingTop: 5,
        paddingBottom: 5
    },
    cardButton: {
        justifyContent: 'center',
        backgroundColor: '#E5F2FA'
    },
    buttonText: {
        color: '#FFF'
    },
    title: {
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#2F3133'
    }
})

export default ProductCard;
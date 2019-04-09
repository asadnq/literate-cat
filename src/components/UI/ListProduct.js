import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content, ListItem, Left, Right, Thumbnail, Icon } from 'native-base';

import RupiahFormat from './texts/RupiahFormat';
import OutlineButton from './buttons/OutlineButton';
import { API_URL } from '../../store/config'

const ListProduct = props => (
    <ListItem noIndent thumbnail button onPress={props.action} >
        <Left>
            <Thumbnail style={styles.prImg} square source={{uri : API_URL + props.cover_image}} resizeMode="contain" />
        </Left>
        <Body>
            <Text style={styles.prName} numberOfLines={1}>
                {props.name}
            </Text>
            <RupiahFormat text={props.price} />
        </Body>
    </ListItem>
)

const styles = StyleSheet.create({
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9',
        fontFamily: 'Lato-Regular'
    },
    prPrice: {
        fontSize: 10,
        color: '#676C6E',
        fontFamily: 'Lato-Regular'
    },
    prImg: {
        height: 78
    }
});


export default ListProduct;
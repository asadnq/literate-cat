import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Container, ListItem, Content, Text } from 'native-base';

const ProductsList = (props) => {
    return (
        <Container>
            <Content>
                <FlatList
                    data={props.data}
                    renderItem={({item}) => (
                        <ListItem noIndent onPress={props.action}>
                            <Text>{item.name}</Text>
                        </ListItem>
                    )}
                    />
            </Content>
        </Container>
    );
}

export default ProductsList;

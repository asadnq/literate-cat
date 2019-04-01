import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Card, CardItem, Body, Container, Content, Text } from 'native-base';

class ProductDetail extends Component {
    

    render() {
        const name = this.props.navigation.getParam('name', 'default');
        const image = this.props.navigation.getParam('image', 'null');
        const price = this.props.navigation.getParam('price', 'null');

        return(
            <Container>
                <Content>
                    <Card style={{flex:1}}>
                        <CardItem>
                            <Body>
                                <View style={styles.imgWrapper}>
                                    <Image resizeMode='cover' source={image} style={styles.img} />
                                </View>
                                <Text style={styles.prName}>
                                    {name}
                                </Text>
                                <Text style={styles.prPrice}>
                                    {price}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    imgWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 12
    },
    img: {
        width: '100%'
    },
    prName: {
        textTransform: 'capitalize',
        borderBottomWidth: 0.8,
        paddingBottom: 5,
        borderColor: '#c9c9c9',
        marginBottom: 12
    },
    prPrice: {
        fontSize: 13,
        color: '#676C6E'
    }
})

export default ProductDetail;
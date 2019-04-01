import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Card, CardItem, Text, Body, Button, Content } from 'native-base';
import dummy from '../../assets/dummy/okComputer.jpg';

import ProductCard from '../components/ProductCard';

export class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    toDetailHandler() {
        this.props.navigation.navigate('ProductDetail', {
            title: 'test'
        })
    }
  
    render() {
    return (
        <Container>
            <Content>
                <View style={styles.cardContainer}>
                        <View style={styles.cardWrapper}>
                                <ProductCard
                                title='Card 1'
                                subtitle='subtitle'
                                image={dummy}
                                action={this.toDetailHandler}
                        />
                    </View>
                    <View style={styles.cardWrapper}>
                            <ProductCard
                                title='Card 1'
                                subtitle='subtitle'
                                image={dummy}
                        />
                    </View>
                </View>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 5
    },
    cardWrapper: {
        width: '50%',
        padding: 5
    }
})

export default HomeScreen

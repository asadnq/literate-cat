import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';

class ProductDetail extends Component {
    
    

    render() {
        const { title } = this.props.navigation.state.params;


        return(
            <Container>
                <Content>
                    <Text>{ title }</Text>
                </Content>
            </Container>
        )
    }
}

export default ProductDetail;
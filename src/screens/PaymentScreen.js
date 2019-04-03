import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem, Body, Button, Input, Item } from 'native-base';
import { FlatList, StyleSheet, View, Modal } from 'react-native';
import ListPayment from '../components/UI/ListPayment';
import { connect } from 'react-redux';

import Lato from '../components/UI/texts/Lato'
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../components/UI/modals/HalfBottomModal';

class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalVisible: {
                address: false
            },
            control: {
                address: ''
            },
            address: null
        }
    }

    
    setAddressModalVisible = () => {
        this.setState({
            modalVisible: {
                address: !this.state.modalVisible.address 
            }
        });
    }

    inputAddressHandler = (val) => {
        this.setState({
            control: {
                address: val
            }
        })
    }

    onModalAddressSubmit = () => {
        this.setState({
            modalVisible: {
                address: !this.state.modalVisible.address 
            },
            address: this.state.control.address
        })
    }
    
    render() {
        
        let address = this.state.address;
        if(address === null) {
            address = 'Jl.Elang III no.200';
        } else {
            address = this.state.address;
        }

        return(
            <Container>
                <HalfBottomModal visible={this.state.modalVisible.address}>
                    <View style={{flex: 1}}>
                        <Lato>address</Lato>
                        <Item>
                            <Input onChangeText={this.inputAddressHandler}/>
                        </Item>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, marginTop: '30%', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Button onPress={this.onModalAddressSubmit}>
                            <Text>
                                submit
                            </Text>
                        </Button>
                        <Button onPress={this.setAddressModalVisible}>
                            <Text>Close</Text>
                        </Button>
                    </View>
                </HalfBottomModal>
                <Content style={{padding: '3%'}}>
                    <Card style={{marginBottom: 5}}>
                        <CardItem header>
                            <Lato style={{fontWeight: 'bold'}}>Where to send</Lato>
                        </CardItem>
                        <CardItem style={{padding: 12}}>
                            <Body>
                                <Lato>Naufal asad alhaq</Lato>
                                <Lato style={styles.address}>{address}</Lato>
                            </Body>
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 12}}>
                            <Button small onPress={this.setAddressModalVisible}>
                                <Text>use another address</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Lato style={{fontWeight: 'bold'}}>Checkout</Lato>
                        </CardItem>
                        <CardItem>
                                <FlatList
                                    keyExtractor={(item, index) => 'key'+item.id}
                                    data={this.props.cart}
                                    renderItem={({item}) => (
                                        <ListPayment {...item} />
                                    )}
                                />
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', padding: 12}}>
                            <Lato style={{flex: 1}}>choose a courier :</Lato>
                            <Button style={{alignSelf: 'flex-end',width: '35%'}} small>
                                <Text>choose</Text>
                            </Button>
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', padding: 12}}>
                            <Lato style={{flex: 1}}>Total</Lato>
                            <RupiahFormat text={this.props.total} />
                        </CardItem>
                    </Card>
                        <Card style={{marginTop: 5}}>
                            <CardItem style={{paddingLeft: 12,paddingRight: 12}}>
                                <Button full bordered style={{flex: 1}}>
                                    <Text>pay now</Text>
                                </Button>
                            </CardItem>
                        </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});

const mapState = state => {
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}

export default connect(mapState)(PaymentScreen);
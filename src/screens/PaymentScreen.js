import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem, Body, Button, Input, Item } from 'native-base';
import { FlatList, StyleSheet, View, Modal } from 'react-native';
import ListPayment from '../components/UI/ListPayment';
import { connect } from 'react-redux';

import Lato from '../components/UI/texts/Lato'
import RupiahFormat from '../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../components/UI/modals/HalfBottomModal';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import ListCourier from '../components/UI/ListCourier';
import DefaultButton from '../components/UI/buttons/DefaultButton';

class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalVisible: {
                address: false,
                courier: false
            },
            control: {
                address: '',
                courier: {}
            },
            address: null,
            courier: null,
            total: this.props.total
        }
    }

    
    setAddressModalVisibility = () => {
        this.setState( prevState => {
            return {
                ...prevState,
                modalVisible: {
                    address: !this.state.modalVisible.address,
                    courier: prevState.modalVisible.courier
                }
            }
        });
    }

    setCourierModalVisibility = () => {
        this.setState( prevState => {
            return {
                ...prevState,
                modalVisible: {
                    address: prevState.modalVisible.address,
                    courier: !this.state.modalVisible.courier
                }
            }
        });
    }

    inputAddressHandler = (val) => {
        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    address: val,
                    courier: prevState.courier
                }
            }
        })
    }

    onModalAddressSubmit = () => {
        this.setState( prevState => {
            return {
                ...prevState,
                modalVisible: {
                    address: !this.state.modalVisible.address,
                    courier: prevState.modalVisible.courier
                },
                address: this.state.control.address
            };
        })
    }
    
    onCourierListPressed = (courier) => {
        this.setState( prevState => {
            return {
                ...prevState,
                modalVisible: {
                    address: prevState.modalVisible.address,
                    courier: !prevState.modalVisible.courier
                },
                courier,
                total: courier.charge + this.props.total
            }
        });
        console.log(this.state.courier);
    }

    render() {
        
        let address = this.state.address;
        if(address === null) {
            address = 'Jl.Elang III no.200';
        } else {
            address = this.state.address;
        }

        let courier = this.state.courier;
        if(courier !== null) {
            var courierComp = (
                    <CardItem style={{flexDirection: 'row', padding: 12}}>
                        <Lato style={{flex: 1}}>Courier charge</Lato>
                        <RupiahFormat text={this.state.courier.charge} />
                    </CardItem>)
        }

        return(
            <Container>
                <HalfBottomModal visible={this.state.modalVisible.address} title='input address' visibilityHandler={this.setAddressModalVisibility}>
                    <View style={{flexDirection: 'column', padding: 15, justifyContent: 'space-between'}}>
                        <Lato>address</Lato>
                        <Item>
                            <Input onChangeText={this.inputAddressHandler}/>
                        </Item>
                        <View style={{flex: 1,flexDirection: 'row', alignSelf: 'stretch',
                        alignItems: 'flex-end',justifyContent: 'flex-end'}}>
                            <OutlineButton style={{alignSelf: 'flex-end', height: 38,
                            borderTopRightRadius: 20, borderBottomRightRadius: 20}} onPress={this.onModalAddressSubmit} title='submit'/>
                        </View>
                    </View>
                </HalfBottomModal>

                <HalfBottomModal visible={this.state.modalVisible.courier}
                title='Choose a Courier' visibilityHandler={this.setCourierModalVisibility}
                bodyStyle={{padding: 0}}>
                    <View
                    style={{flexDirection: 'row', justifyContent: 'space-between',
                            padding: 12}}>
                        <Lato>courier</Lato>
                        <Lato>charge</Lato>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => 'key'+index}
                        data={this.props.couriers}  
                        renderItem={({item}) => <ListCourier data={item} action={this.onCourierListPressed.bind(this, item)}/>}
                    />
                </HalfBottomModal>

                <Content style={{padding: '3%'}}>
                    <Card style={{marginBottom: 5}}>
                        <CardItem header>
                            <Lato style={{fontWeight: 'bold'}}>Where to send</Lato>
                        </CardItem>
                        <CardItem style={{padding: 12}}>
                            <Body>
                                <Lato>Naufal asad alhaq</Lato>
                                <Lato>{address}</Lato>
                            </Body>
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 12}}>
                            <OutlineButton small title='use another address' onPress={this.setAddressModalVisibility} />
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
                            <Lato style={{flex: 1}}>
                                {this.state.courier !== null ? this.state.courier.name :'choose a courier :'}
                            </Lato>
                            <OutlineButton style={{alignSelf: 'flex-end'}} small
                                title={this.state.courier !== null ? 'choose another' : 'choose'} onPress={this.setCourierModalVisibility} />
                        </CardItem>

                        {courierComp}
                        
                        <CardItem style={{flexDirection: 'row', padding: 12}}>
                            <Lato style={{flex: 1}}>Sub total</Lato>
                            <RupiahFormat text={this.state.total} />
                        </CardItem>
                    </Card>
                

                    <Card style={{marginTop: 5}}>
                        <CardItem header>
                            <Text>summary</Text>
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', padding: 12}}>
                            <Lato style={{flex: 1}}>total </Lato>
                            <RupiahFormat text={this.props.total} />
                        </CardItem>
                        <CardItem style={{flexDirection: 'row', padding: 12}}>
                            <Lato style={{flex: 1}}>courier charge </Lato>
                            <RupiahFormat text={this.state.courier === null ? 0 : this.state.courier.charge} />
                        </CardItem>
                        <CardItem style={{flexDirection: 'column', paddingLeft: 12,paddingRight: 12}}>
                            <DefaultButton block title='pay now'/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}


const mapState = state => {
    return {
        cart: state.cart.cart,
        total: state.cart.total,
        couriers: state.courier.courier
    }
}

export default connect(mapState)(PaymentScreen);
import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Input,
  Item
} from 'native-base';
import { FlatList, StyleSheet, View, Modal } from 'react-native';

import styles from './Checkout.style';
import Lato from '../../components/UI/texts/Lato';
import RupiahFormat from '../../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../../components/UI/modals/HalfBottomModal';
import OutlineButton from '../../components/UI/buttons/OutlineButton';
import ListCourier from '../../components/UI/ListCourier';
import ListPayment from '../../components/UI/ListPayment';
import DefaultButton from '../../components/UI/buttons/DefaultButton';

export default class CheckoutScreen extends Component {
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
    };
  }

  setAddressModalVisibility = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalVisible: {
          address: !this.state.modalVisible.address,
          courier: prevState.modalVisible.courier
        }
      };
    });
  };

  setCourierModalVisibility = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalVisible: {
          address: prevState.modalVisible.address,
          courier: !this.state.modalVisible.courier
        }
      };
    });
  };

  inputAddressHandler = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        control: {
          address: val,
          courier: prevState.courier
        }
      };
    });
  };

  onModalAddressSubmit = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalVisible: {
          address: !this.state.modalVisible.address,
          courier: prevState.modalVisible.courier
        },
        address: this.state.control.address
      };
    });
  };

  onCourierListPressed = courier => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalVisible: {
          address: prevState.modalVisible.address,
          courier: !prevState.modalVisible.courier
        },
        courier,
        total: courier.charge + this.props.total
      };
    });
    console.log(this.state.courier);
  };

  render() {
    let address = this.state.address;
    if (address === null) {
      address = 'Jl.Elang III no.200';
    } else {
      address = this.state.address;
    }

    let courier = this.state.courier;
    if (courier !== null) {
      var courierComp = (
        <CardItem style={{ flexDirection: 'row', padding: 12 }}>
          <Lato style={{ flex: 1 }}>Courier charge</Lato>
          <RupiahFormat text={this.state.courier.charge} />
        </CardItem>
      );
    }

    return (
      <Container>
        <HalfBottomModal
          visible={this.state.modalVisible.address}
          title="input address"
          visibilityHandler={this.setAddressModalVisibility}
        >
          <View style={styles.inputAddressModal}>
            <Lato>address</Lato>
            <Item>
              <Input onChangeText={this.inputAddressHandler} />
            </Item>
            <View style={styles.actionAddressModal}>
              <OutlineButton
                style={styles.addressSubmitButton}
                onPress={this.onModalAddressSubmit}
                title="submit"
              />
            </View>
          </View>
        </HalfBottomModal>

        <HalfBottomModal
          visible={this.state.modalVisible.courier}
          title="Choose a Courier"
          visibilityHandler={this.setCourierModalVisibility}
          bodyStyle={{ padding: 0 }}
        >
          <View style={styles.pickCourierModal}>
            <Lato>courier</Lato>
            <Lato>charge</Lato>
          </View>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            data={this.props.couriers}
            renderItem={({ item }) => (
              <ListCourier
                data={item}
                action={this.onCourierListPressed.bind(this, item)}
              />
            )}
          />
        </HalfBottomModal>

        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem header>
              <Lato style={styles.cardHeaderText}>Where to send</Lato>
            </CardItem>
            <CardItem style={styles.cardSection}>
              <Body>
                <Lato>Naufal asad alhaq</Lato>
                <Lato>{address}</Lato>
              </Body>
            </CardItem>
            <CardItem style={styles.actionAddressCard}>
              <OutlineButton
                small
                title="use another address"
                onPress={this.setAddressModalVisibility}
              />
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header>
              <Lato style={styles.cardHeaderText}>Checkout</Lato>
            </CardItem>
            <CardItem>
              <FlatList
                keyExtractor={(item, index) => 'key' + item.id}
                data={this.props.carts}
                renderItem={({ item }) => <ListPayment {...item} />}
              />
            </CardItem>
            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>
                {this.state.courier !== null
                  ? this.state.courier.name
                  : 'choose a courier :'}
              </Lato>
              <OutlineButton
                style={{ alignSelf: 'flex-end' }}
                small
                title={
                  this.state.courier !== null ? 'choose another' : 'choose'
                }
                onPress={this.setCourierModalVisibility}
              />
            </CardItem>

            {courierComp}

            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>Sub total</Lato>
              <RupiahFormat text={this.state.total} />
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.cardHeaderText}>summary</Text>
            </CardItem>
            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>total </Lato>
              <RupiahFormat text={this.props.total} />
            </CardItem>
            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>courier charge </Lato>
              <RupiahFormat
                text={
                  this.state.courier === null ? 0 : this.state.courier.charge
                }
              />
            </CardItem>
            <CardItem style={styles.cardSectionVertical}>
              <DefaultButton block title="pay now" />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

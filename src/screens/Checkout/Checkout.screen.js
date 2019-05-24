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
import {
  FlatList,
  View,
} from 'react-native';
import Spinner from 'react-native-spinkit'

import styles from './Checkout.style';
import Lato from '../../components/UI/texts/Lato';
import RupiahFormat from '../../components/UI/texts/RupiahFormat';
import HalfBottomModal from '../../components/UI/modals/HalfBottomModal';
import OutlineButton from '../../components/UI/buttons/OutlineButton';
import ListLocation from '../../components/lists/ListLocation';
import ListCourier from '../../components/lists/ListCourier';
import ListPayment from '../../components/UI/ListPayment';
import DefaultButton from '../../components/UI/buttons/DefaultButton';

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: null,
      control: {
        address: ''
      },
      data: {
        province: null,
        city: null,
        address: null,
        courier: null
      },
      subTotal: this.props.total
    };
  }

  setVisibleModal = (name = null) => {
    this.setState({ visibleModal: name });
  };

  inputAddressHandler = val => {
    this.setState({
      address: val
    });
  };

  onModalAddressSubmit = () => {
    this.setState({
      data: { ...this.state.data, address: this.state.control.address }
    });
    this.setVisibleModal();
  };

  pickProvinceHandler = province => {
    this.setState({ data: { ...this.state.data, province } });
    this.props.filterCities(province.province_id);
    this.setVisibleModal();
  };

  pickCityHandler = city => {
    const checkout = {
      destination: city.city_id
    };
    this.setState(
      state => {
        return {
          data: { ...state.data, city }
        };
      },
      () => this.props.getCosts(checkout)
    );
    this.setVisibleModal();
  };

  sumSubTotal = () => {
    this.setState({subTotal: this.props.total + this.state.data.courier.cost[0].value})
  }

  pickCourierHandler = item => {
    this.setState(state => {
      return { data: { ...this.state.data, courier: item } };
    }, () => this.sumSubTotal());
    this.setVisibleModal();
  };

  render() {
    const { data } = this.state;
    let address = this.state.data.address;
    if (address === null) {
      address = 'Jl.Elang III no.200';
    } else {
      address = this.state.data.address;
    }

    let courier = this.state.data.courier;
    if (courier !== null) {
      var courierComp = (
        <CardItem style={{ flexDirection: 'row', padding: 12 }}>
          <Lato style={{ flex: 1 }}>Courier charge</Lato>
          <RupiahFormat text={this.state.data.courier.cost[0].value} />
        </CardItem>
      );
    }

    return (
      <Container>
        <HalfBottomModal
          visible={this.state.visibleModal === 'address'}
          title="input address"
          visibilityHandler={this.setVisibleModal}
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
          visible={this.state.visibleModal === 'courier'}
          title="choose a courier"
          visibilityHandler={this.setVisibleModal}
          bodyStyle={{ padding: 0 }}
        >
          <View style={styles.pickCourierModal}>
            <Lato>courier</Lato>
            <Lato>charge</Lato>
          </View>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            data={this.props.costs}
            renderItem={({ item }) => (
              <ListCourier
                {...item}
                onPress={this.pickCourierHandler.bind(this, item)}
              />
            )}
          />
        </HalfBottomModal>

        <HalfBottomModal
          visible={this.state.visibleModal === 'province'}
          title="choose a province"
          visibilityHandler={this.setVisibleModal}
          bodyStyle={{ padding: 0 }}
        >
          <View style={styles.pickCourierModal}>
            <Lato>provinces</Lato>
          </View>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            data={this.props.provinces}
            renderItem={({ item }) => (
              <ListLocation
                text={item.province}
                onPress={this.pickProvinceHandler.bind(this, item)}
              />
            )}
          />
        </HalfBottomModal>

        <HalfBottomModal
          visible={this.state.visibleModal === 'city'}
          title="choose a city"
          visibilityHandler={this.setVisibleModal}
          bodyStyle={{ padding: 0 }}
        >
          <View style={styles.pickCourierModal}>
            <Lato>courier</Lato>
          </View>
          <FlatList
            keyExtractor={(item, index) => 'key' + index}
            data={this.props.cities}
            renderItem={({ item }) => {
              return (
                <ListLocation
                  text={item.city_name}
                  onPress={this.pickCityHandler.bind(this, item)}
                />
              );
            }}
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
                onPress={this.setVisibleModal.bind(this, 'address')}
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
                {data.province === null
                  ? 'choose a province'
                  : data.province.province}
              </Lato>
              <OutlineButton
                style={{ alignSelf: 'flex-end' }}
                small
                title={data.province !== null ? 'choose another' : 'choose'}
                onPress={this.setVisibleModal.bind(this, 'province')}
              />
            </CardItem>
            <CardItem>
              <Lato style={{ flex: 1 }}>
                {data.city === null ? 'choose a city' : data.city.city_name}
              </Lato>
              <OutlineButton
                style={{ alignSelf: 'flex-end' }}
                small
                title={data.city !== null ? 'choose another' : 'choose'}
                onPress={this.setVisibleModal.bind(this, 'city')}
              />
            </CardItem>
            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>
                {data.courier !== null
                  ? data.courier.service
                  : 'choose a courier'}
              </Lato>
              <OutlineButton
                style={{ alignSelf: 'flex-end', minWidth: '20%' }}
                small
                icon={this.props.costsLoading ? (<Spinner type="Circle" size={18} color="#0081AF" /> ): null}
                title={data.courier !== null ? 'choose another' : this.props.costsLoading ? null : 'choose'}
                onPress={this.setVisibleModal.bind(this, 'courier')}
                disabled={this.props.costsLoading || this.state.data.city === null}
              />
            </CardItem>

            {courierComp}

            <CardItem style={styles.cardSection}>
              <Lato style={{ flex: 1 }}>Sub total</Lato>
              <RupiahFormat text={this.state.subTotal} />
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
                  this.state.data.courier === null
                    ? 0
                    : this.state.data.courier.cost[0].value
                }
              />
            </CardItem>
            <CardItem style={styles.cardSectionVertical}>
              <DefaultButton block title="pay now" />
              {this.props.provinces.map(p => {
                return <View key={p.province_id} />;
              })}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

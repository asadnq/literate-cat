import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Content, Footer, FooterTab, Text, Icon } from 'native-base';
import { NavigationActions, NavigationEvents } from 'react-navigation';

import styles from './Cart.style';
import ListCart from '../../components/UI/ListCart';
import BlockContent from '../../components/UI/BlockContent';
import RupiahFormat from '../../components/UI/texts/RupiahFormat';
import DefaultButton from '../../components/UI/buttons/DefaultButton';
import OutlineButton from '../../components/UI/buttons/OutlineButton';
import Loading from '../../components/UI/loading/Loading';
import ModalLoading from '../../components/UI/loading/ModalLoading';
import QuarterModal from '../../components/UI/modals/QuarterModal';
import HalfBottomModal from '../../components/UI/modals/HalfBottomModal';
import TransparentButton from '../../components/UI/buttons/TransparentButton';
import HeaderText from '../../components/headers/HeaderText';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: {
        deleteCart: false
      },
      selectedItem: null
    };
  }

  static navigationOptions = {
    title: 'cart',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#006494'
    }
  };

  addQtyHandler = cart => {
    this.props.addQty(cart);
  };

  subQtyHandler = cart => {
    this.props.subQty(cart);
  };

  minQtyHandler = () => {
    const { quantity } = this.state.control;
    const decreasedVal =
      quantity > 1 ? parseInt(quantity) - 1 : parseInt(quantity);
    const priceSum = this.state.product.price * decreasedVal;

    this.setState(prevState => {
      return {
        ...prevState,
        control: {
          quantity: decreasedVal.toString(),
          modalVisibility: prevState.control.modalVisibility,
          priceSum
        }
      };
    });
  };

  onDeleteCart = cart => {
    this.props.deleteCart(cart);
    this.setDeleteModalVisibility();
    this.props.itemDeleted();
  };

  checkoutHandler = () => {
    this.props.navigation.navigate('Checkout');
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getCarts();
    }
  }

  setDeleteModalVisibility = (item = null) => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalVisible: {
          deleteCart: !prevState.modalVisible.deleteCart
        },
        selectedItem: item
      };
    });
  };

  setQuarterModalVisibilty = () => {
    this.props.itemDeleted();
  };

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }

    if (this.props.carts.length > 0 && this.props.isLoggedIn) {
      return (
        <Container>
          <HeaderText text="Cart" />
          <NavigationEvents
            onWillBlur={() => this.props.updateCarts(this.props.carts)}
          />
          <ModalLoading visible={this.props.isDeleteLoading} />
          <HalfBottomModal
            visible={this.state.modalVisible.deleteCart}
            visibilityHandler={this.setDeleteModalVisibility}
            height={.17}
          >
            <View style={styles.deleteItemModal}>
              <Text style={{ textAlign: 'center' }}>delete this item?</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TransparentButton
                onPress={this.onDeleteCart.bind(this, this.state.selectedItem)}
                style={{ width: '50%' }}
                titleStyle={{ color: '#D11935' }}
                title="delete"
              />
              <TransparentButton
                onPress={this.setDeleteModalVisibility}
                style={{ width: '50%' }}
                titleStyle={{ color: '#aaa' }}
                title="cancel"
              />
            </View>
          </HalfBottomModal>
          <QuarterModal
            visible={this.props.isItemDeleted}
            text="item deleted"
            action={this.setQuarterModalVisibilty}
            visibilityHandler={this.setQuarterModalVisibilty}
            buttonText="ok"
          />
          <Content>
            <FlatList
              data={this.props.carts}
              keyExtractor={(item, index) => 'key ' + item.id}
              renderItem={({ item }) => (
                <ListCart
                  {...item}
                  actionDelete={this.setDeleteModalVisibility.bind(this, item)}
                  value={item.quantity.toString()}
                  addQty={this.addQtyHandler.bind(this, item)}
                  subQty={this.subQtyHandler.bind(this, item)}
                />
              )}
            />
          </Content>
          <Footer style={styles.footer}>
            <FooterTab style={styles.footerTab}>
              <View style={styles.footerLeft}>
                <Text style={styles.totalText}>total :</Text>
                <RupiahFormat
                  style={{ fontSize: 18 }}
                  text={this.props.total}
                />
              </View>
              <View style={styles.footerRight}>
                <OutlineButton
                  block
                  title="checkout"
                  style={styles.checkoutButton}
                  onPress={this.checkoutHandler}
                />
              </View>
            </FooterTab>
          </Footer>
        </Container>
      );
    }

    return (
      <BlockContent>
        <Icon type="FontAwesome" name="cart-arrow-down" />
        <Text>Your cart is empty</Text>
        <DefaultButton
          style={{ alignSelf: 'center', marginTop: 5 }}
          title="shop now"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </BlockContent>
    );
  }
}

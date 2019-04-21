import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon
} from "native-base";
import { connect } from "react-redux";
import { NavigationActions, NavigationEvents } from "react-navigation";

import {
  deleteCart,
  addQuantity,
  subQuantity,
  getCarts,
  updateCarts,
  itemDeleted
} from "../store/actions/cart";
import ListCart from "../components/UI/ListCart";
import BlockContent from "../components/UI/BlockContent";
import RupiahFormat from "../components/UI/texts/RupiahFormat";
import DefaultButton from "../components/UI/buttons/DefaultButton";
import OutlineButton from "../components/UI/buttons/OutlineButton";
import Loading from "../components/UI/loading/Loading";
import ModalLoading from "../components/UI/loading/ModalLoading";
import QuarterModal from "../components/UI/modals/QuarterModal";
import HalfBottomModal from "../components/UI/modals/HalfBottomModal";
import TransparentButton from "../components/UI/buttons/TransparentButton";

class CartScreen extends Component {
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
    title: "cart",
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#006494"
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
    const navigate = NavigationActions.navigate({
      routeName: "Payment"
    });

    this.props.navigation.dispatch(navigate);
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
          <NavigationEvents
            onWillBlur={() => this.props.updateCarts(this.props.carts)}
          />
          <ModalLoading visible={this.props.isDeleteLoading} />
          <HalfBottomModal
            visible={this.state.modalVisible.deleteCart}
            visibilityHandler={this.setDeleteModalVisibility}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 5
              }}
            >
              <Text style={{ textAlign: "center" }}>delete this item?</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TransparentButton
                onPress={this.onDeleteCart.bind(this, this.state.selectedItem)}
                style={{ width: "50%" }}
                titleStyle={{ color: "#D11935" }}
                title="delete"
              />
              <TransparentButton
                onPress={this.setDeleteModalVisibility}
                style={{ width: "50%" }}
                titleStyle={{ color: "#aaa" }}
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
              keyExtractor={(item, index) => "key " + item.id}
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
          <Footer>
            <FooterTab
              style={{ flexDirection: "row", backgroundColor: "#fff" }}
            >
              <Container
                style={{ width: "35%", alignItems: "center", padding: 10 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    alignSelf: "flex-start"
                  }}
                >
                  total :
                </Text>
                <RupiahFormat
                  style={{ fontSize: 18 }}
                  text={this.props.total}
                />
              </Container>
              <Container style={{ padding: 8 }}>
                <OutlineButton
                  block
                  title="checkout"
                  style={{ height: 30, marginLeft: 0 }}
                  onPress={this.checkoutHandler}
                />
              </Container>
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
          style={{ alignSelf: "center", marginTop: 5 }}
          title="shop now"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </BlockContent>
    );
  }
}

const mapState = state => {
  return {
    carts: state.cart.carts,
    total: state.cart.total,
    isLoading: state.cart.isLoading,
    isDeleteLoading: state.cart.isDeleteLoading,
    isItemDeleted: state.cart.isItemDeleted,
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatch = dispatch => {
  return {
    deleteCart: cart => dispatch(deleteCart(cart)),
    addQty: cart => dispatch(addQuantity(cart)),
    subQty: cart => dispatch(subQuantity(cart)),
    getCarts: () => dispatch(getCarts()),
    updateCarts: carts => dispatch(updateCarts(carts)),
    itemDeleted: () => dispatch(itemDeleted())
  };
};

export default connect(
  mapState,
  mapDispatch
)(CartScreen);

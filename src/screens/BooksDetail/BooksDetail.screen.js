import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Container,
  Content,
  Text,
  Icon
} from 'native-base';

import { IMG_URL } from '../../config/api.config';
import RupiahFormat from '../../components/UI/texts/RupiahFormat';
import CustomFAB from '../../components/UI/buttons/CustomFAB';
import Lato from '../../components/UI/texts/Lato';
import Raleway from '../../components/UI/texts/Raleway';
import Philosopher from '../../components/UI/texts/Philosopher';
import Loading from '../../components/UI/loading/Loading';
import ModalLoading from '../../components/UI/loading/ModalLoading';
import QuarterModal from '../../components/UI/modals/QuarterModal';
import AddToCartModal from '../../components/AddToCartModal';
import styles from './BooksDetail.style';
import GenreBadge from '../../components/badges/GenreBadge';

export default class BooksDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      control: {
        modalVisible: {
          addToCart: false
        }
      }
    };
  }

  onAddCartHandler = (book, qty) => {
    if (!this.props.isLoggedIn) {
      this.props.navigation.navigate('Login');
    } else {
      this.props.addToCart(book, qty);
      this.setModalVisibility();
      this.props.addedToCart();
      setTimeout(() => {
        this.props.hideModal();
      }, 5000);
    }
  };

  setModalVisibility = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        control: {
          modalVisible: {
            addToCart: !prevState.control.modalVisible.addToCart
          }
        }
      };
    });
  };

  setQuarterModalVisibilty = () => {
    this.props.addedToCart();
  };

  render() {
    const { name, cover_image, price, description } = this.props.book;

    if (this.props.isLoading) {
      return <Loading />;
    }
    return (
      <Container>
        <QuarterModal
          visible={this.props.isAddedToCart}
          text="added to cart"
          buttonText="go to cart"
          action={() => this.props.navigation.navigate('Cart')}
          visibilityHandler={this.setQuarterModalVisibilty}
        />
        <ModalLoading visible={this.props.isAddLoading ? true : false} />
        <AddToCartModal
          visible={this.state.control.modalVisible.addToCart}
          visibilityHandler={this.setModalVisibility}
          data={this.props.book}
          addToCart={this.onAddCartHandler}
          addedToCart={this.setQuarterModalVisibilty}
        />
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem style={styles.imgWrapper}>
              <Image
                resizeMode="contain"
                source={{ uri: IMG_URL + cover_image }}
                style={styles.img}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Philosopher style={styles.prName}>{name}</Philosopher>
                <RupiahFormat style={styles.prPrice} text={price} />
                <View style={styles.genreContainer}>
                  <Lato style={styles.genreText}>genre: </Lato>
                  {this.props.book.genres.map((item, index) => {
                    return <GenreBadge key={'key' + item.id} {...item} />;
                  })}
                </View>
                <Raleway style={styles.prDesc}>{description}</Raleway>
              </Body>
            </CardItem>
            <CardItem />
          </Card>
        </Content>
        <CustomFAB onPress={this.setModalVisibility}>
          <Icon
            type="MaterialIcons"
            name="shopping-basket"
            style={{ color: '#FFF', fontSize: 20 }}
          />
        </CustomFAB>
      </Container>
    );
  }
}

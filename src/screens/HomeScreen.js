import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';

import ProductList from '../components/ProductsList';
import ProductCard from '../components/ProductCard';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import { getBooks, getBook } from '../store/actions/book';
import Loading from '../components/UI/loading/Loading';

export class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            viewMode: {
                card: true,
                list: false
            }
        }
    }

    static navigationOptions = {
        title: 'books',
      };


      toProductDetail = (id) => {
          this.props.getBook(id);
          this.props.navigation.navigate('ProductDetail');
    }

    viewModeCardHandler = () => {
        this.setState(prevState => {
            return {
                viewMode: {
                    card: true,
                    list: false
                }
            }
        })
    }

    viewModeListHandler = () => {
        this.setState(prevState => {
            return {
                viewMode: {
                    card: false,
                    list: true
                }
            }
        })
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {

        if(this.props.isLoading) {
            return <Loading />;
        }

        return(
            <Container>
                <Content>
                    <Container style={{flexDirection: 'row', justifyContent: 'center',marginTop: 5, height: 45}}>
                        <OutlineButton block transparent onPress={this.viewModeCardHandler}
                                disabled={this.state.viewMode.card ? true : false} title='card view'
                                style={{borderBottomLeftRadius: 30, borderTopLeftRadius: 30,
                                borderBottomRightRadius: 0, borderTopRightRadius: 0,
                                backgroundColor: this.state.viewMode.list ? 'transparent' : '#006494'}}
                                titleStyle={{color: this.state.viewMode.list ? '#006494' : '#FFF'}}/>
                        <OutlineButton block transparent onPress={this.viewModeListHandler}
                                disabled={this.state.viewMode.list ? true : false}
                                title='list view'
                                style={{borderBottomRightRadius: 30, borderTopRightRadius: 30,
                                    borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
                                    backgroundColor: this.state.viewMode.card ? 'transparent' : '#006494'}}
                                    titleStyle={{color: this.state.viewMode.card ? '#006494' : '#FFF'}}
                                />
                    </Container>
                {this.state.viewMode.card ?
                (
                    <ProductCard data={this.props.books}
                        action={this.toProductDetail.bind(this)} />
                ) : (
                    <ProductList data={this.props.books}
                        action={this.toProductDetail.bind(this)} />
                )
                }
                </Content>
            </Container>
        )
    }
}

const mapState = state => {
    return {
        books: state.books.books,
        isLoading: state.books.isLoading
    }
}

const mapDispatch = dispatch => {
    return {
        getBooks: () => dispatch(getBooks()),
        getBook: id => dispatch(getBook(id))
    }
}

export default connect(mapState, mapDispatch)(HomeScreen);

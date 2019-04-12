import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';

import ProductList from '../components/ProductsList';
import ProductCard from '../components/ProductCard';
import OutlineButton from '../components/UI/buttons/OutlineButton';
import { getBooks, getBook, searchBook } from '../store/actions/book';
import Loading from '../components/UI/loading/Loading';
import SearchForm from '../components/SearchForm';
import ViewMode from '../components/UI/buttons/ViewMode';

export class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            viewMode: {
                card: true,
                list: false
            },
            control: {
                search: ''
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

    viewModeHandler = () => {
        this.setState(prevState => {
            return {
                viewMode: {
                    card: !prevState.viewMode.card,
                    list: !prevState.viewMode.list
                }
            }
        })
    }

    searchHandler = (val) => {
        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    search: val
                }
            }
        });
        if(val !== '') {
            this.props.searchBook(val);
        } else {
            this.props.getBooks();
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {

        return(
            <Container>
                <Content>
                    <SearchForm onChangeText={this.searchHandler} value={this.state.control.search} />
                    <Container style={{flexDirection: 'row', justifyContent: 'space-between',
                                    marginTop: 2, height: 40, alignItems: 'center',
                                    paddingLeft: 12, paddingRight: 12}}>
                        <Text>view mode: {this.state.viewMode.card ? 'card' : 'list'}</Text>
                        <ViewMode
                        onPress={this.viewModeHandler}
                        icon={this.state.viewMode.card ? 'view-array' : 'view-list'}/>
                    </Container>
                {this.props.isLoading ? <Loading /> :
                    this.state.viewMode.card ?
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

export default connect(mapState, { getBooks, getBook, searchBook })(HomeScreen);

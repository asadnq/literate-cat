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
            },
            typingTimeout: 0
        }
    }

    static navigationOptions = {
        title: 'books',
      };


      toProductDetail = (id) => {
          this.props.getBook(id);
          this.props.navigation.navigate('ProductDetail');
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

        if(this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    search: val
                },
                typingTimeout: setTimeout(() => {
                    if(val === '') {
                        this.props.getBooks();
                    } else {
                    this.props.searchBook(val)
                    }
                }, 500)
            }
        });

        

    }

    refreshHandler() {
        this.props.getBooks();
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
                        refreshing={this.props.isLoading}
                        onRefresh={this.refreshHandler.bind(this)}
                        action={this.toProductDetail.bind(this)} />
                ) : (
                    <ProductList data={this.props.books}
                    refreshing={this.props.isLoading}
                    onRefresh={this.refreshHandler.bind(this)}
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

export default connect(mapState, { getBooks, getBook, searchBook })(HomeScreen);

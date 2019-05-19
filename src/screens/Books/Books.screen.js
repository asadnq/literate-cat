import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';

import ProductList from '../../components/ProductsList';
import ProductCard from '../../components/ProductCard';
import GenreView from '../../components/GenreView';
import Loading from '../../components/UI/loading/Loading';
import SearchForm from '../../components/SearchForm';
import ViewMode from '../../components/UI/buttons/ViewMode';

export default class Books extends Component {
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
      typingTimeout: 0,
      pagination: {
        page: 1,
        limit: 10
      }
    };
  }

  static navigationOptions = {
    title: 'books'
  };

  toProductDetail = id => {
    this.props.getBook(id);
    this.props.navigation.navigate('BooksDetail');
  };

  viewModeHandler = () => {
    this.setState(prevState => {
      return {
        viewMode: {
          card: !prevState.viewMode.card,
          list: !prevState.viewMode.list
        }
      };
    });
  };

  searchHandler = val => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState(prevState => {
      return {
        ...prevState,
        pagination: {
          page: 1,
          limit: 10
        },
        control: {
          search: val
        },
        typingTimeout: setTimeout(() => {
          const { page, limit } = this.state.pagination;
          if (val === '') {
            this.props.getBooks();
          } else {
            this.props.searchBook(page,limit,val);
          }
        }, 500)
      };
    });
  };

  refreshHandler() {
    this.setState(
      {
        pagination: {
          page: 1,
          limit: 10
        },
        control: {
          search: ''
        }
      },
      () => this.props.getBooks()
    );
  }

  getMoreBooks = () => {
    const { page, limit } = this.state.pagination;
    const { search } = this.state.control;

    if (search) {
      this.props.getMoreSearch(page, limit, search)
    } else {
      this.props.getMoreBooks(page, limit);
    }
  };

  onEndReachedHandler = () => {
    const { page, limit } = this.state.pagination;
    this.setState(
      {
        pagination: { page: page + 1, limit }
      },
      () => this.getMoreBooks()
    );
  };

  componentDidMount() {
    this.props.getBooks();
    this.props.getGenres();
  }

  render() {
    let genreComponent;
    if (this.props.isGenresLoading) {
      genreComponent = <Loading />;
    } else {
      genreComponent = <GenreView data={this.props.genres} />;
    }

    return (
      <View>
        <View style={{ flexDirection: 'column', height: '100%' }}>
          <SearchForm
            onChangeText={this.searchHandler}
            value={this.state.control.search}
          />
          {/* start: genre view */}
          {genreComponent}
          {/* end: genre view */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2,
              height: 40,
              alignItems: 'center',
              paddingLeft: 12,
              paddingRight: 12
            }}
          >
            <Text>view mode: {this.state.viewMode.card ? 'card' : 'list'}</Text>
            <ViewMode
              onPress={this.viewModeHandler}
              icon={this.state.viewMode.card ? 'view-array' : 'view-list'}
            />
          </View>
          {this.props.isLoading ? (
            <Loading />
          ) : this.state.viewMode.card ? (
            <ProductCard
              data={this.props.books}
              refreshing={this.props.isLoading}
              onRefresh={this.refreshHandler.bind(this)}
              action={this.toProductDetail.bind(this)}
              onEndReached={this.onEndReachedHandler.bind(this)}
            />
          ) : (
            <ProductList
              data={this.props.books}
              refreshing={this.props.isLoading}
              onRefresh={this.refreshHandler.bind(this)}
              action={this.toProductDetail.bind(this)}
              onEndReached={this.onEndReachedHandler.bind(this)}
            />
          )}
        </View>
      </View>
    );
  }
}

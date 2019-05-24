import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';

import ProductList from '../../components/ProductsList';
import ProductCard from '../../components/ProductCard';
import GenreView from '../../components/GenreView';
import Loading from '../../components/UI/loading/Loading';
import ViewMode from '../../components/UI/buttons/ViewMode';
import HeaderSearch from '../../components/headers/HeaderSearch';
import styles from './Books.style';
import OutlineButton from '../../components/UI/buttons/OutlineButton';
import { GenreCard } from '../../components/GenreView';

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
      },
      filter: {
        author: null,
        genres: null
      },
      isFiltered: false
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
            this.props.searchBook(pagination, val);
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
    const { pagination, filter } = this.state;
    const { search } = this.state.control;

    if (this.state.isFiltered) {
      this.props.getMoreFilteredBooks(pagination, filter);
    } else {
      if (search) {
        this.props.getMoreSearch(pagination, search);
      } else {
        this.props.getMoreBooks(pagination);
      }
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

  applyBooksFilter = filter => {
    this.setState(state => {
      return {
        pagination: {
          page: 1,
          limit: 10
        },
        filter,
        isFiltered: true
      };
    });
  };

  toBooksFilter = () => {
    this.props.navigation.navigate('BooksFilter', {
      filter: this.applyBooksFilter.bind(this)
    });
  };

  componentDidMount() {
    this.props.getBooks();
    this.props.getGenres();
  }

  renderGenreComponent = () => {
    let genreComponents = [];
    if (this.state.filter.genres !== null) {
      this.props.genres.map(genre => {
        if (this.state.filter.genres.includes(genre.id)) {
          //genreComponents.push(<GenreBadge key={genre.id} {...genre} />);
          genreComponents.push(<GenreCard key={genre.id} name={genre.name} />);
        }
      });
      return genreComponents;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderSearch
          onChangeText={this.searchHandler}
          value={this.state.control.search}
        />
        <View style={styles.preferenceContainer}>
          <View style={styles.genreFilterContainer}>
            {this.renderGenreComponent()}
          </View>
          <View style={styles.actionButtonContainer}>
            <ViewMode
              onPress={this.viewModeHandler}
              icon={this.state.viewMode.card ? 'view-array' : 'view-list'}
            />
            <OutlineButton
              title="filter"
              onPress={this.toBooksFilter}
              style={styles.filterButton}
            />
          </View>
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
    );
  }
}

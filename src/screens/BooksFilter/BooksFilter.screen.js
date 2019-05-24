import React from 'react';
import { View, Text } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import OutlineButton from '../../components/UI/buttons/OutlineButton';
import styles from './BookFilter.style';

export default class BooksFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        genres: [],
        author: ''
      }
    };
  }

  selectGenreHandler = genres => {
    this.setState({ filter:{...this.state.filter, genres} });
  };

  applyFilter = () => {
    this.props.navigation.state.params.filter(this.state.filter);
    this.props.filterBooks(this.state.filter);
    this.props.navigation.goBack();
  };

  cancelFilter = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Filter Books</Text>
        <SectionedMultiSelect
          items={this.props.genres}
          uniqueKey="id"
          onSelectedItemsChange={this.selectGenreHandler}
          showCancelButton
          selectedItems={this.state.filter.genres}
        />
        <View style={styles.footerContainer}>
          <OutlineButton title="apply" style={styles.applyButton} onPress={this.applyFilter} />
          <OutlineButton title="cancel" style={styles.cancelButton} onPress={this.cancelFilter} />
        </View>
      </View>
    );
  }
}

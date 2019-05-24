import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Item, Icon, Input } from 'native-base';

const HeaderSearch = props => (
  <View style={styles.header}>
    <Item regular style={styles.containerSearch}>
      <Icon name="search" style={{color: '#eee', fontSize: 25}}/>
      <Input
        placeholder="search books..."
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.searchInput}
        placeholderTextColor='#bbd'
      />
    </Item>
    {props.children}
  </View>
);

export default HeaderSearch;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.075,
    paddingHorizontal: width * 0.025,
    alignItems: 'center',
    backgroundColor: '#006494',
    paddingVertical: height * .005
  },
  containerSearch: {
    width: '100%',
    height: '90%',
    borderColor: 'transparent',
    backgroundColor: '#0D5A80',
    borderRadius: 5
  },
  searchInput: {
    backgroundColor: 'transparent',
    height: '100%',
    color: '#eee'
  }
});
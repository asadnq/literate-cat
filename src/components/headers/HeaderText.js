import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Item, Text, Icon, Input } from 'native-base';

const HeaderText = props => (
  <View style={styles.header}>
    <Text style={styles.title}>
        {props.text}
    </Text>
  </View>
);

export default HeaderText;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.075,
    paddingHorizontal: width * 0.04,
    justifyContent: 'center',
    backgroundColor: '#006494',
    paddingVertical: height * 0.005
  },
  title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: '500'
  }
});

import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { ListItem } from 'native-base';

import RupiahFormat from '../UI/texts/RupiahFormat';

export default props => {
  return (
    <ListItem noIndent style={styles.listStyle} onPress={props.onPress}>
      <View style={styles.listSection}>
        <Text style={styles.listText}>{props.service}</Text>
        <RupiahFormat text={props.cost[0].value} />
      </View>
      <View style={styles.listSection}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.description}>estimated time: {props.cost[0].etd} day</Text>
      </View>
    </ListItem>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  listStyle: {
    borderBottomWidth: 0.6,
    paddingBottom: height * 0.02,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  listSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 10
  },
  listText: {
    fontFamily: 'Lato-Regular',
    textAlign: 'left',
    color: '#292929'
  }
});

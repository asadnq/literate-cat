import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GenreBadge = props => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{props.name}</Text>
    </View>
  );
};

export default GenreBadge;

const styles = StyleSheet.create({
  badge: {
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: '#eee',
    backgroundColor: '#FFF',
    paddingVertical: 1.5,
    paddingHorizontal: 12,
    marginRight: 5,
    marginTop: 5
  },
  badgeText: {
    fontSize: 12,
    color: '#778',
    fontFamily: 'Lato-Regular'
  }
});

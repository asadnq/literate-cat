import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const ViewMode = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Icon style={styles.icon} type="MaterialIcons" name={props.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#006494',
    borderRadius: 5
  },
  icon: {
    color: '#006494'
  }
});

export default ViewMode;

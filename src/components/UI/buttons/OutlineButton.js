import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Text } from 'native-base';

const OutlineButton = props => {
  return (
    <Button
      bordered
      {...props}
      style={[styles.buttonStyle, { borderColor: props.color }, props.style]}
      disabled={props.disabled}
    >
      {props.icon}
      {props.title == null ? null : (
        <Text numberOfLines={2} style={[styles.textStyle, props.titleStyle]}>
          {props.title}
        </Text>
      )}
    </Button>
  );
};

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    borderColor: '#006494',
    paddingHorizontal: width * .005,
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    backgroundColor: 'transparent',
    color: '#006494',
    fontFamily: 'Lato-Regular',
    textTransform: 'lowercase'
  }
});

export default OutlineButton;

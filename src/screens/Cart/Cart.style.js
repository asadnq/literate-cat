import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  totalText: {
    textAlign: 'center',
    fontSize: width * .035,
    alignSelf: 'flex-start'
  }
});
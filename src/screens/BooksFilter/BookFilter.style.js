import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column'
  },
  footerContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.005,
    height: height * 0.08,
    borderTopWidth: 0.78,
    borderTopColor: '#c3c3c3'
  },
  applyButton: {
    width: '70%'
  },
  cancelButton: {
    width: '28%'
  }
});

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  viewModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    height: height * .1,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12
  },
  container: { flexDirection: 'column', height: '100%' }
});

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  preferenceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.1,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.03
  },
  container: {
    flexDirection: 'column',
    height: '100%'
  },
  genreFilterContainer: {
    flexDirection: 'row',
    width: '30%'
  },
  actionButtonContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  },
  filterButton: {
    height: '100%',
    borderRadius: 5
  }
});

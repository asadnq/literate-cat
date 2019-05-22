import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  addressSubmitButton: {
    alignSelf: 'flex-end',
    height: 38,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  content: {
    padding: '3%'
  },
  card: {
    marginBottom: 5
  },
  cardHeaderText: {
    fontWeight: 'bold'
  },
  inputAddressModal: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'space-between'
  },
  actionAddressModal: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  pickCourierModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  actionAddressCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12
  },
  cardSection: {
    flexDirection: 'row',
    paddingHorizontal: width * .05
  },
  cardSectionVertical: {
    flexDirection: 'column',
    paddingHorizontal: width * .05
  }
});

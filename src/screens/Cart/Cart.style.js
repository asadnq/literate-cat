import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  deleteItemModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  totalText: {
    textAlign: 'center',
    fontSize: width * 0.035,
    alignSelf: 'flex-start'
  },
  footer: {
    height: height * 0.1,
    borderTopWidth: 0.75,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  footerTab: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.025,
    paddingTop: height * .01,
    height: height * 0.1,
  },
  footerLeft: {
    width: '35%',
    height: '75%'
  },
  footerRight: {
    width: '65%',
    height: '75%'
  },
  checkoutButton: {
    height: '1%',
  }
});

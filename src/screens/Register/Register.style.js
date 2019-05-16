import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  linearGradient: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%"
  },
  headerWrapper: {
    flexDirection: "column",
    height: "5%",
    width: "85%"
  },
  form: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "85%",
    padding: 5,
    height: "90%"
  },
  label: {
    color: "#999",
    fontSize: 12
  },
  inputWrapper: {
    flex: 1
  },
  input: {},
  button: {
    alignSelf: "flex-end",
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#FFF",
    elevation: 2
  },
  titleButton: {
    color: "#004363"
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "center"
  },
  signupText: {
    fontSize: 12,
    color: "#98B9BA"
  },
  signUpLink: {
    textDecorationLine: "underline",
    color: "#006494",
    fontSize: 12
  }
});
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import { Form, Label, Item, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import DefaultButton from '../components/UI/buttons/DefaultButton';

class Register extends Component {

    static navigationOptions = {
        title: 'register',
        headerTransparent: true,
        headerTitleStyle: {
          fontFamily: 'Lato-Regular'
        }
    }

  render() {
    return (
      <LinearGradient
        style={styles.linearGradient}
        colors={["#E9EEF0", "#F0F5F7", "#F7FDFF"]}
      >
        <Form style={styles.form}>
          <View style={styles.inputWrapper}>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>username</Label>
              <Input underlineColorAndroid="transparent" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>email</Label>
              <Input underlineColorAndroid="transparent" />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>password</Label>
              <Input underlineColorAndroid="transparent" />
            </Item>
          </View>
          <DefaultButton
            style={styles.button}
            titleStyle={styles.titleButton}
            title="sign up"
          />
          <View style={styles.signUpContainer}>
            <Text style={styles.signupText}>already have an acount? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.signUpLink}>sign in</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
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

export default Register;

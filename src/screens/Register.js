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
import { connect } from 'react-redux';

import { register } from '../store/actions/user';
import DefaultButton from '../components/UI/buttons/DefaultButton';

class Register extends Component {

    constructor() {
      super();
      this.state = {
        control: {
          username: '',
          email: '',
          password: ''
        }
      }
    }

    static navigationOptions = {
        title: 'register',
        headerTransparent: true,
        headerTitleStyle: {
          fontFamily: 'Lato-Regular'
        }
    }

    emailInputHandler = val => {
      this.setState( state => {
        return {
          ...state,
          control: {
            ...state.control,
            email: val
          }
        }
      })
    }

    passwordInputHandler = val => {
      this.setState( state => {
        return {
          ...state,
          control: {
            ...state.control,
            password: val
          }
        }
      })
    }

    usernameInputHandler = val => {
      this.setState( state => {
        return {
          ...state,
          control: {
            ...state.control,
            username: val
          }
        }
      })
    }

    _register = () => {
      this.props.register(this.state.control);
      this.props.navigation.navigate('MainStack');
    }

  render() {
    const { control } = this.state;
    return (
      <LinearGradient
        style={styles.linearGradient}
        colors={["#E9EEF0", "#F0F5F7", "#F7FDFF"]}
      >
        <Form style={styles.form}>
          <View style={styles.inputWrapper}>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>username</Label>
              <Input underlineColorAndroid="transparent" onChange={this.usernameInputHandler}
                value={control.username}
                autoCapitalize = 'none'/>
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>email</Label>
              <Input underlineColorAndroid="transparent" onChange={this.emailInputHandler}
                keyboardType='email-address'
                autoCapitalize = 'none'
                value={control.email} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>password</Label>
              <Input underlineColorAndroid="transparent" onChange={this.passwordInputHandler}
                secureTextEntry={true}
                autoCapitalize = 'none'
                value={control.password} />
            </Item>
          </View>
          <DefaultButton
            style={styles.button}
            titleStyle={styles.titleButton}
            title="sign up"
            onPress={this._register}
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

export default connect(null, { register })(Register);

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

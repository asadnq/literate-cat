
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Form, Label, Item, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import DefaultButton from "../../components/UI/buttons/DefaultButton";
import styles from './Login.style'

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      control: {
        email: '',
        password: ''
      }
    }
  }

  static navigationOptions = {
    header: null
  };

  _singIn = () => {
    this.props.login(this.state.control);
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

  render() {

    const { control } = this.state;
    return (
      <LinearGradient
        style={styles.linearGradient}
        colors={["#E9EEF0", "#F0F5F7", "#F7FDFF"]}
      >
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Literate Cat</Text>
          <Text style={styles.subTitle}>book store</Text>
        </View>
        <Form style={styles.form}>
          <View style={styles.inputWrapper}>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>email</Label>
              <Input underlineColorAndroid="transparent"
                onChangeText={this.emailInputHandler}
                keyboardType='email-address'
                autoCapitalize = 'none'
                value={control.email} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>password</Label>
              <Input underlineColorAndroid="transparent"
                onChangeText={this.passwordInputHandler}
                value={control.password}
                secureTextEntry={true}
                autoCapitalize = 'none'/>
            </Item>
          </View>
          <DefaultButton
            style={styles.button}
            titleStyle={styles.titleButton}
            title="sign in"
            onPress={this._singIn}
          />
          <View style={styles.signUpContainer}>
            <Text style={styles.signupText}>
              don't have an account? sign up{" "}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Register')}
            >
              <Text style={styles.signUpLink}>here</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </LinearGradient>
    );
  }
}
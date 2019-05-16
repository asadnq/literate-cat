import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Form, Label, Item, Input } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import DefaultButton from '../../components/UI/buttons/DefaultButton';
import styles from './Register.style'

export default class Register extends Component {

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
      });
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
      });
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
      });
      console.log(this.state);
    }

    _register = () => {
      this.props.register(this.state.control);
      this.props.navigation.navigate('AuthLoading');
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
              <Input underlineColorAndroid="transparent" onChangeText={this.usernameInputHandler}
                value={control.username}
                autoCapitalize = 'none'/>
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>email</Label>
              <Input underlineColorAndroid="transparent" onChangeText={this.emailInputHandler}
                keyboardType='email-address'
                autoCapitalize = 'none'
                value={control.email} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>password</Label>
              <Input underlineColorAndroid="transparent" onChangeText={this.passwordInputHandler}
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
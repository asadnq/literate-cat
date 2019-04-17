import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  AsyncStorage
} from "react-native";
import { Form, Label, Item, Input } from "native-base";
import { connect } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";

import DefaultButton from "../components/UI/buttons/DefaultButton";
import { login } from '../store/actions/user';

class Login extends Component {

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
  //
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'xaxaxa');
  //   this.props.navigation.navigate('MainStack');
  // };

  _singIn = () => {
    this.props.login(this.state.control);
    this.props.navigation.navigate('AuthLoading');
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
                Text={this.emailInputHandler}
                keyboardType='email-address' value={this.state.control.email}/>
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>password</Label>
              <Input underlineColorAndroid="transparent"
                onChangeText={this.passwordInputHandler} value={this.state.control.password}
                secureTextEntryonChange={true}/>
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

const mapState = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(mapState, mapDispatch)(Login);

const styles = StyleSheet.create({
  linearGradient: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%"
  },
  headerWrapper: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    height: "25%",
    width: "85%"
  },
  title: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 42,
    color: '#13223A',
    width: '100%',
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#9AA9BE',
    textAlign: 'center'
  },
  form: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "85%",
    padding: 5,
    height: "75%"
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


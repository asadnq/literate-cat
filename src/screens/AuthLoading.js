import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';


class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { user } = this.props;
    // await user.isLoggedIn ? alert('loged in') : alert('awkwkwk')
    await this.props.navigation.navigate(user.isLoggedIn ? 'MainStack' : 'AuthStack');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(AuthLoading);
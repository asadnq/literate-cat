import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <View>
        <NavigationEvents
              onDidFocus={() => user.isLoggedIn ? this._toMainStack : alert('Authentication error') }
          />
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
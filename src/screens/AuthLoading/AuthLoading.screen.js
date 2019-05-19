import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bootstrapAsync } from '../../store/actions/user'

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.props.bootstrapAsync()
  }

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

export default connect(mapState, { bootstrapAsync })(AuthLoading);
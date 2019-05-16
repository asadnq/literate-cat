import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Text } from 'native-base';

export default class SettingsScreen extends React.Component {
  _signOut = () => {
    this.props.navigation.navigate('AuthStack');
  };

  render() {
    const { user, isLoggedIn } = this.props.user;

    if (!isLoggedIn) {
      return (
        <ScrollView>
          <ListItem button onPress={this._signOut} noIndent>
            <Text>sign in</Text>
          </ListItem>
        </ScrollView>
      );
    }

    return (
      <ScrollView>
        <ListItem noIndent>
          <Text>{user.username}</Text>
        </ListItem>
        <ListItem noIndent>
          <Text>{user.email}</Text>
        </ListItem>
        <ListItem button onPress={this._signOut} noIndent>
          <Text>sign out</Text>
        </ListItem>
      </ScrollView>
    );
  }
}
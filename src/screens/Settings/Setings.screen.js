import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Text } from 'native-base';

import HeaderText from '../../components/headers/HeaderText'

export default class SettingsScreen extends React.Component {
  _signOut = () => {
    this.props.logout()
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
      <View>
        <HeaderText text="Settings" />  
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
      </View>
    );
  }
}
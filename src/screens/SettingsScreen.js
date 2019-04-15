import React from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { ListItem, Text } from 'native-base';

class SettingsScreen extends React.Component {

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthStack');
      };

    render() {
        return(
            <ScrollView>
                <ListItem button onPress={this._signOutAsync} noIndent>
                    <Text>
                        sign out
                    </Text>
                </ListItem>
            </ScrollView>
        )
    }
}

export default SettingsScreen;
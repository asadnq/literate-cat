import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'native-base';

export default props => {
    return (
        <ListItem noIndent style={styles.listItem} onPress={props.onPress}>
            <Text style={styles.listText}>{props.text}</Text>
        </ListItem>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: .6,
        paddingBottom: height * .02
    },
    listText: {
        fontFamily: 'Lato-Regular',
        color: '#292929'
    }
});
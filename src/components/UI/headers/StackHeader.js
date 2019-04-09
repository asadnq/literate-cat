import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HeaderText = props => (
    <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>book store</Text>
    </View>
)

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 8,
        height: 50,
        backgroundColor: '#006494',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardStyle: {
        padding: '4%',
    },
    textStyle: {
        fontSize: 25,
        color: '#F4F3EE',
        textAlign: 'center',
        fontFamily: 'KaushanScript-Regular'
    }
    
})

export default HeaderText;
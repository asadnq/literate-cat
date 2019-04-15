import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HeaderText = props => (
    <View style={styles.containerStyle}>
        <Text style={styles.title}>Literate Cat</Text>
        <Text style={styles.subTitle}>book store</Text>
    </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 8,
        height: 50,
        paddingBottom: 5,
        flexDirection: 'column',
        backgroundColor: '#006494',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardStyle: {
        padding: '4%',
    },
    title: {
        fontSize: 22,
        color: '#F4F3EE',
        textAlign: 'center',
        fontFamily: 'KaushanScript-Regular',
        width: '100%'
    },
    subTitle: {
        fontSize: 10,
        textAlign: 'center',
        color: '#D2D3BB',
        fontFamily: 'Dosis-Regular',
        position: 'absolute',
        top: 25
    }
    
})

export default HeaderText;
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Rubik from './texts/Rubik';
import Philosopher from './texts/Philosopher';
import RupiahFormat from './texts/RupiahFormat';

const CardProduct = props => {
    return (
    <TouchableOpacity style={styles.card} onPress={props.action}>
        <View style={styles.imgWrapper}>
            <Image resizeMode='contain' style={styles.image} source={props.image} />
        </View>
        <View style={styles.cardBody}>
            <View style={{flex: 1, height: 40}}>
                <Philosopher textBreakStrategy='simple'
style={styles.prName} numberOfLines={2}>{props.name}</Philosopher>
            </View>
            <RupiahFormat style={{flex: 1}} text={props.price} />
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        width: '46%',
        marginRight: '2%',
        marginLeft: '2%',
        marginBottom: '3%',
        padding: 5
    },
    imgWrapper: {
        flexDirection: 'row',
        height: 130,
        marginBottom: 3
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    cardBody: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 5,
        margin: 0
        
    },
    prName: {
        alignSelf: 'stretch',
        fontSize: 16,
    }

})

export default CardProduct;
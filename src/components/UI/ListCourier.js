import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ListItem, Icon, Text, Left, Thumbnail, Body, Right, Button } from 'native-base';

import RupiahFormat from '../UI/texts/RupiahFormat';
import Lato from '../UI/texts/Lato';

const ListCourier = props => {

    const {  } = styles;

    return(

        <ListItem noIndent style={styles.listStyle} onPress={props.action}>
                <Lato>{ props.data.name }</Lato>
                <RupiahFormat text={props.data.charge} />
        </ListItem>
    )
}


const styles = StyleSheet.create({
    listStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default ListCourier;
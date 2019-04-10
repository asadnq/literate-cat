import React from 'react';
import { StyleSheet, Image,View } from 'react-native';
import { ListItem, Icon, Left, Thumbnail, Body, Right, Button, Card } from 'native-base';


import Philosopher from '../UI/texts/Philosopher';
import RupiahFormat from '../UI/texts/RupiahFormat';
import InputQuantity from './InputQuantity';
import { IMG_URL } from '../../config/api.config'

const ListCart = props => {

    return(
        <Card>
            <ListItem noIndent thumbnail>
                <Left>
                    <Thumbnail style={styles.prThumb} square source={{uri: IMG_URL + props.cover_image}} resizeMode="contain" />
                </Left>
                <Body>
                    <Philosopher style={styles.prName}>
                        { props.name }
                    </Philosopher>
                    <RupiahFormat style={styles.prPrice} text={props.price} />
                </Body>
                <Right>
                    <Button style={styles.delButton} bordered danger onPress={props.actionDelete}>
                        <Icon style={styles.delIcon} name='trash' type='FontAwesome'/>
                    </Button>
                </Right>
            </ListItem>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <InputQuantity value={props.value} onMinPressed={props.subQty} onPlusPressed={props.addQty} />
                <RupiahFormat text={props.price_sum} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9'
    },
    prPrice: {
        fontSize: 10,
        color: '#676C6E'
    },
    prImg: {
        height: 78
    },
    delButton: {
        width: 26,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    delIcon: {
        fontSize: 14,
        marginLeft: 0,
        marginRight: 0
    },
    prThumb: {
        height: 70,
        marginTop: 2
    }
})

export default ListCart;
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'native-base';

import HalfBottomModal from './UI/modals/HalfBottomModal';
import RupiahFormat from './UI/texts/RupiahFormat';
import OutlineButton from './UI/buttons/DefaultButton';
import Philosopher from './UI/texts/Philosopher';
import InputQuantity from './UI/InputQuantity';
import { IMG_URL } from '../config/api.config';

class AddToCartModal extends React.Component { 
    
    constructor(props) {
        super(props);

        this.state = {
            control: {
                quantity: '1',
                price_sum: this.props.data.price
            }
        }
    }

    inputQtyHandler = (val) => {

        const qty = parseInt(val);
        const price_sum = this.props.data.price * qty;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: val.replace(/[^0-9]/g, '').toString,
                    price_sum
                }
            }
        });
    }

    addQtyHandler = () =>  {

        const increasedVal = parseInt(this.state.control.quantity) + 1
        const price_sum = this.props.data.price * increasedVal;

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: increasedVal.toString(),
                    price_sum
                }
            }
        })
    }

    minQtyHandler = () => {

        const { quantity } = this.state.control;
        const decreasedVal = quantity > 1 ? parseInt(quantity) - 1 : parseInt(quantity);
        const price_sum = this.props.data.price * decreasedVal

        this.setState(prevState => {
            return {
                ...prevState,
                control: {
                    quantity: decreasedVal.toString(),
                    price_sum
                }
            }
        })
    }

    onAddCartHandler = () => {
        this.props.addToCart(this.props.data, this.state.control.quantity);
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                ...prevState,
                price_sum: parseInt(prevState.control.quantity) * this.props.data.price 
            }
        });
    }

    render() {

        const { data } = this.props;

        return(
            <HalfBottomModal
                title='add to cart'
                visible={this.props.visible}
                visibilityHandler={this.props.visibilityHandler}>
                <View style={styles.modalContent}>
                    <View style={styles.modalItem1}>
                        <View style={styles.imgWrapper}>
                            <Image resizeMode='contain' source={{uri: IMG_URL + data.cover_image}} style={styles.img} />
                        </View>
                        <View style={styles.summary}>
                            <Philosopher numberOfLines={2} style={{fontSize: 18,}}>{data.name}</Philosopher>
                            <View style={styles.detail}>
                                <RupiahFormat text={data.price} />
                                <Text>x</Text>
                                <Text>{this.state.control.quantity}</Text>
                            </View>
                            <InputQuantity 
                                onMinPressed={this.minQtyHandler}
                                onPlusPressed={this.addQtyHandler}
                                onChangeText={this.inputQtyHandler}
                                value={this.state.control.quantity}
                                />
                        </View>
                    </View>
                    <View style={styles.modalItem2}>
                        <RupiahFormat text={this.state.control.price_sum} style={{color: '#705E49', fontSize: 20}}/>
                        <OutlineButton style={styles.button}
                            onPress={this.onAddCartHandler} title='add to cart'/>
                    </View>
                </View>
            </HalfBottomModal>
        )
    }
}


const styles = StyleSheet.create({
    modalContent: {
        height: 200,
        padding: 15
    },
    modalItem1: {
        flexDirection: 'row',
        height: 120
    },
    imgWrapper: {
        flex: 1
    }, 
    img: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    modalItem2: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    summary: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 4
    },
    button: {
        alignSelf: 'flex-end',
        borderRadius: 20,
        height: 30
    }
});

export default AddToCartModal;
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Icon, Button } from 'native-base';
import Modal from 'react-native-modal';

const HalfBottomModal = props => {

    return(
        <Modal
        style={styles.modal} 
        isVisible={props.visible}
        animationInTiming={700}
        animationOutTiming={500}
        animaackdropTransitionInTiming={500}
        backdropTransitionOutTiming={800}
        onBackdropPress={props.visibilityHandler}
        onBackButtonPress={props.visibilityHandler}>
            <View style={[styles.innerModal, props.bodyStyle]}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>
                        {props.title}
                    </Text>
                    <Button transparent style={styles.closeButton} onPress={props.visibilityHandler}>
                        <Icon style={styles.closeIcon} type='MaterialIcons' name='close' />
                    </Button>
                </View>
                <View style={styles.modalBody}>
                    {props.children}
                </View>
            </View>
        </Modal>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    modal: {
        margin:0,
        justifyContent: 'flex-end'
    },
    innerModal: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        height: height * .5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 4,
        paddingRight: 4,
        paddingLeft: 8,
        paddingBottom: 2,
        borderBottomWidth: .75,
        borderColor: '#c9c9c9'
    },
    modalBody: {
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'stretch'
    },
    closeButton: {
        height: 30,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 0,
        width: 30
    },
    modalTitle: {
        fontSize: 17,
        textTransform: 'lowercase',
        fontFamily: 'Rubik-Regular',
        color: 'hsl(220, 10%, 78%)'
    },
    closeIcon: {
        fontSize: 30,
        marginRight: 0,
        marginLeft: 0,
        color: 'hsl(220, 10%, 78%)'
    }
});

export default HalfBottomModal;
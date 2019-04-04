import React from 'react';
import { View, Modal, StyleSheet, Text } from 'react-native';
import { Icon, Button } from 'native-base';


import Hoc from '../../Hoc';

const HalfBottomModal = props => {

    return(
        <Hoc>
            <Modal
                transparent={true}
                visible={props.visible}
                animationType='fade'>
                <View style={styles.modalOverlay}>
                </View>
            </Modal>
                <Modal
                transparent={true}
                visible={props.visible}
                animationType='slide'>
                 <View style={{flex: .5}}>
                    </View>
                    <View style={styles.innerModalWrapper}>
                        <View style={styles.innerModal}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>
                                    {props.title}
                                </Text>
                                <Button transparent style={styles.closeButton} onPress={props.visibilityHandler}>
                                    <Icon style={styles.closeIcon} type='MaterialIcons' name='close' />
                                </Button>
                            </View>
                            <View style={[styles.modalBody, props.bodyStyle]}>
                                {props.children}
                            </View>
                        </View>
                    </View>
                </Modal>
        </Hoc>
    )
}

const styles = StyleSheet.create({
    innerModalWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    innerModal: {
        width: '100%',
        height: 330,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    modalOverlay: {
        backgroundColor: 'hsla(0, 0%, 0%, 0.75)',
        height: '100%',
        width: '100%'
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 2,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 2,
        borderBottomWidth: .75,
        borderColor: '#c9c9c9'
    },
    modalBody: {
        padding: 12,
        flexDirection: 'column',
        width: '100%',
        height: 300,
    },
    closeButton: {
        height: 30,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 0,
        width: 30
    },
    modalTitle: {
        fontSize: 20,
        textTransform: 'uppercase'
    },
    closeIcon: {
        fontSize: 30,
        marginRight: 0,
        marginLeft: 0,
        color: '#333'
    }
});

export default HalfBottomModal;
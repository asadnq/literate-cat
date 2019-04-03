import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

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
                    <View style={styles.innerModalWrapper}>
                        <View style={styles.innerModal}>
                            {props.children}
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
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 12,
        display: 'flex',
        flexDirection: 'column'
    },
    modalOverlay: {
        backgroundColor: 'hsla(0, 0%, 0%, 0.75)',
        height: '100%',
        width: '100%'
    }
});

export default HalfBottomModal;
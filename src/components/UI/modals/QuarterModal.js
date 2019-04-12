import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

class QuarterModal extends React.Component {
    state = {
        visible: this.props.visible
    }

    render() {
        return(
            <Modal
            style={styles.modal}
            isVisible={this.props.visible}
            backdropOpacity={0}
            onBackdropPress={this.props.visibilityHandler}
            animationInTiming={700}
            animationOutTiming={550}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.text}>{this.props.text}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.props.action}>
                        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>)
        
    }
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-end'
    },
    modalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'hsla(216, 20%, 20%, .97)',
        padding: 5
    },
    text: {
        fontFamily: 'Lato-Regular',
        color: '#E4E3FF'
    },
    button: {
        width: 80,
        height: 30,
        padding:2,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        
    }
});

export default QuarterModal
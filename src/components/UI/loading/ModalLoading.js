import React from 'react';
import Spinner from 'react-native-spinkit';
import Modal from 'react-native-modal';
import { View, Text } from 'react-native';

const ModalLoading = props => (
  <Modal
    isVisible={props.visible}
    animationInTiming={300}
    animationOutTiming={300}
    backdropTransitionOutTiming={600}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Spinner type="ThreeBounce" size={42} color="#0081AF" />
    </View>
  </Modal>
);

export default ModalLoading;

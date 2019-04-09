import React from 'react';
import Spinner from 'react-native-spinkit';
import { View } from 'react-native';

const Loading = () => (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
        <Spinner type='ThreeBounce' size={42} color='#0081AF'/>
    </View>
);

export default Loading;
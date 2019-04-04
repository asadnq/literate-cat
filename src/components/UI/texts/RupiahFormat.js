import React from 'react';
import { Text } from 'native-base';

const convertToRupiah = (val) => {
    var rupiah = '';		
	var valrev = val.toString().split('').reverse().join('');
	for(var i = 0; i < valrev.length; i++) if(i%3 == 0) rupiah += valrev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}

const RupiahFormat = (props) => {
    
    return(
        <Text style={props.style}>{convertToRupiah(props.text)}</Text>
    )
}

export default RupiahFormat;
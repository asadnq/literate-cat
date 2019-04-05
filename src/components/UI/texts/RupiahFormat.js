import React from 'react';
import { Text, StyleSheet } from 'react-native';

const convertToRupiah = (val) => {
    var rupiah = '';		
	var valrev = val.toString().split('').reverse().join('');
	for(var i = 0; i < valrev.length; i++) if(i%3 == 0) rupiah += valrev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}

const RupiahFormat = (props) => {
    
    return(
        <Text style={[styles.text,props.style]}>{convertToRupiah(props.text)}</Text>
    )
}

const styles = StyleSheet.create({
    text:{ 
        fontFamily: 'Dosis-Regular',
        color: '#0081AF'
    }
})

export default RupiahFormat;
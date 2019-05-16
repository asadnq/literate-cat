import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    imgWrapper: {
        flexDirection: 'row',
        marginBottom: 12,
        width: width,
        height: 300
    },
    img: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    prName: {
        textTransform: 'capitalize',
        borderBottomWidth: 0.8,
        paddingBottom: 5,
        borderColor: '#c9c9c9',
        marginBottom: 12,
        fontSize: 20
    },
    prPrice: {
        fontSize: 13,
        color: '#676C6E'
    },
    prDesc: {
        color: '#666',
        fontSize: 11,
        margin: 2,
        textAlign: 'justify'
    },
    buyButton: {
        borderColor: '#006494',
        margin: 8,
        height: '80%'
    }
})
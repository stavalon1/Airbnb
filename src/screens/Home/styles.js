import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height:40,
        marginLeft: 25,
        borderRadius:10,
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton:{
        backgroundColor: '#fff',
       flexDirection: 'row',
       top: 1,
       width: Dimensions.get('screen').width - 20,
       height: 60,
       borderRadius: 30,
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 10,
       position: 'relative',
       zIndex: 100,
    },
    searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});

export default styles;
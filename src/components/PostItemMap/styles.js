import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      height: 120,
      padding: 5,
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    },
    innerContainer:{
        flexDirection:'row',
          backgroundColor: '#ffffff',
          borderRadius: 10,
          overflow:'hidden',
    },
    image:{
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    bedroom:{
     marginVertical: 10,
     color:'#565656'
    },
    description:{
        fontSize: 15,
      
    },
    prices:{
        fontSize:15,
        marginVertical: 10,
    },
    oldPrice:{
        color:'#565656',
        textDecorationLine: 'line-through',
    },
    newPrice:{
        fontWeight:'900',
    },
    totalPrice:{
        color:'#565656',
        textDecorationLine: 'underline',
    },
});

export default styles;
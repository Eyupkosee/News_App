import { Dimensions,StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        margin:10,
        borderRadius:6,
    },
    image:{height: Dimensions.get('window').height/4,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,    
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black',
        marginBottom:5,
        marginTop:3,
    },
    description:{
        color:'black',
        fontWeight:'400',
        fontFamily:'sans-serif'
    },
    author:{
        textAlign:'right',
        marginBottom:10,
        fontStyle:'italic'
    }
});
export default styles;
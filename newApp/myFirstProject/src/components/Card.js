import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './card.style'


const Card = (props) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.news.imageUrl}} />
            <Text style={styles.title} >{props.news.title}</Text>
            <Text style={styles.description} >{props.news.description}</Text>
            <Text style={styles.author} >{props.news.author}</Text>
        </View>
    )
}
export default Card;
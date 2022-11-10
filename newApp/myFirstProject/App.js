import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import new_data from './news_data.json'
import Card from './src/components/Card';
import news_banner from './news_banner_data.json'


const App = (prosp) => {
  const renderNews = ({item})=> <Card news={item} />  
  return (
    <SafeAreaView style={styles.container}>  
      <Text style={styles.header}>Sky News</Text>
      <FlatList
      ListHeaderComponent={()=><ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        news_banner.map(bannerNews => (<Image
        style={styles.banner_img} source={{uri: bannerNews.imageUrl}} key={prosp.u_id} />))
      }
    </ScrollView> }
      keyExtractor={item => item.id.toString()}
      data = {new_data}
      renderItem = {renderNews}
      />
    </SafeAreaView>
  )};

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#EDEDED',
  },
  banner_img:{
    height:Dimensions.get('window').height/4,
    width:Dimensions.get('window').width/2,
  },
  header:{
    fontSize:30,
    color: '#223e46d4',
    fontWeight: 'bold',
    textAlign:'center',
    margin:5,
  }
  
})

export default App;

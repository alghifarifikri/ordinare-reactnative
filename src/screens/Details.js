import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { 
  Input, 
  Item, 
  Container,
  Content, 
  Card, 
  CardItem, 
  Left,
  Right,
  Body 
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'
import StarRating from 'react-native-star-rating';
import ImageDetail from '../component/details/ImageDetail'
import ItemDetail from '../component/details/ItemDetail'
import Review from '../component/details/Review'
import Showcase from '../component/details/Showcase'
import Footers from '../component/details/Footers'
import Jwt from 'jwt-decode'

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : "#fff",
    padding : 5
  },
  ImageDetail : {
    flex : 1,
    resizeMode : 'cover',
    padding : 90,
    width : '100%',
    height : 100
  },
  item : {
    backgroundColor : '#0000FF',
    padding : 30,
    height : 145,
    paddingRight : 40,
    margin : -25,
    borderTopRightRadius : 70,
    borderTopLeftRadius : 70,
    
  },
  review : {
    backgroundColor : '#eee',
    padding : 5,
    marginTop : 100,
    margin : -25,
    borderRadius : 20
  },
  icon : {
    fontSize : 22
  },
  button:{
    backgroundColor: '#0000FF',
    borderRadius: 8,
    height: 40,
    width : 80,
    marginLeft : 10,
    marginRight : 40,
    flex : 1,
    marginTop : 5,
    marginBottom : 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  text:{
    fontSize: 12,
    color: '#000',
    fontWeight : 'bold',
  },
  image : {
    width : 50,
    height : 100,
    flex : 1,
    marginLeft: 5,
    marginRight:5,
    padding: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5
  },
  row:{
    flexDirection: 'row'
  },
  cardView : {
    width : 120,
    borderRadius : 20
  }
})

export default class Details extends Component {
  render() {
    return (
      <Container>
      <View>
        <ImageDetail/>
      </View>

      <View>
        <ItemDetail/>
      </View>

      <ScrollView>
        <Review/>
        
        <Text style = {styles.menuSubTitle} style = {{backgroundColor : '#eee', color : '#000'}} > Recommended For You </Text>
          <ScrollView horizontal = {true}>
            <Showcase/>
          </ScrollView>

        </ScrollView>
        
      <View>
        <Footers/>
      </View>

      </Container>
    )
  }
}
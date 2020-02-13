import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Container, Header, Item, Input, Button, Content, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles =  StyleSheet.create({
  root : {
    backgroundColor : "#000",
    margin : 5
  },
  icon : {
    fontSize : 20,
    margin : 10
  },
  search : {
    backgroundColor : '#eee',
  },
  text:{
    fontSize: 12,
    color: '#000',
    fontWeight : 'bold',
  },
})

class SearchBar extends Component {
  render () {
    return (
      <View style={styles.search}>
        <Card style = {{borderRadius : 50, height : 50}}>
          <CardItem style = {{borderRadius : 50 , height : 50}}>
            <Input style = {{borderRadius : 50}} placeholder="Find Here"  />
            <Icon name='search' style={styles.icon}/>
          </CardItem>
          </Card>
      </View>
    )
  }
}

class FoodMenu extends Component {
  render () {
    return (
      <Container style = {{backgroundColor : '#eee'}}>
      <View style={{backgroundColor:"#eee", height:5}}></View>
       <Content style = {{marginHorizontal : 10}}>

       <ScrollView>
         <Card style = {{borderRadius : 20}}>
           <CardItem style = {{borderRadius : 20}}>
             <Left>
               <Thumbnail source = {require('../image/ayamgeprek.jpg')} />
               <Body>
                 <Text>Ayam Geprek</Text>
                 <Text style = {styles.text}>Rp. 10.000</Text>
                 <Text style = {styles.text}>Geprek Bensu</Text>
                 <Text style = {styles.text}>Rating : 5</Text>
               </Body>
               <Icon name='cart-plus' style={styles.icon}/>
             </Left>
           </CardItem>
         </Card>
         </ScrollView> 
         
       </Content>
     </Container> 
    )
  }
}

export default class Search extends Component {
  render() {
    return (
      <Container>

        <SearchBar/>

      <Container>
        <FoodMenu/>
      </Container>

      </Container>
    )
  }
}
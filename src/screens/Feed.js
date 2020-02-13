import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/Fontisto'
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : "#fff",
    padding : 5
  },
  banner : {
    backgroundColor : '#fff',
    padding : 15
  },
  icon : {
    fontSize : 16,
    color : '#0000FF'
  },
})

export default class Feed extends Component {
  render() {
    return (
      <Container>

      <View style = {styles.row}>
        <View style = {styles.banner}>
          <Text  style = {styles.menuTitle}> New Feed Today </Text>
      </View>

      <View style={{backgroundColor:"#eee", height:2}}></View>
        
      </View>

        <ScrollView>
      
        <Content>
          <Card style={{flex: 0, elevation : 5, backgroundColor : '#eee'}}>
            <CardItem style = {{elevation : 5}}>
              <Left>
                <Thumbnail source = {require('../image/aps.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source = {require('../image/ayamgeprek.jpg')} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                  ada menu baru lo hari ini
                </Text>
              </Body>
            </CardItem>
            <CardItem style = {{elevation : 5, marginBottom : 5}}>
              <Left>
                {/* <Button transparent textStyle={{color: '#87838B'}}> */}
                  <Icon name="like" style = {styles.icon}/>
                  <Text style = {{fontSize : 16, color : '#0000FF'}}> 1,926 </Text>
                {/* </Button> */}
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="comments" style = {styles.icon}/>
                  <Text style = {{fontSize : 16, color : '#0000FF'}}> 13,685 </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>

        </ScrollView>
      </Container>
    )
  }
}

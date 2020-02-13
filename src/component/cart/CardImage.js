import React, { Component } from 'react'
import {
  Text, 
  View, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity, 
  Image,
  TextInput
} from 'react-native'
import {
  Container, 
  Card, 
  CardItem,
  Right, 
  Left, 
  Body, 
  Input,
  Button
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MeIcon from 'react-native-vector-icons/Entypo'
import usericon from '../../image/ayamgeprek.jpg'


const styles = StyleSheet.create({
  icon : {
    fontSize : 22,
    color : '#0000FF'
  },
  button:{
    backgroundColor: '#0000FF',
    borderRadius: 8,
    height: 30,
    width : 60,
    marginLeft : 10,
    marginBottom : 5,
    marginTop : 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform:'uppercase'
  },
})

class CardImage extends Component {
  render() {
    return (
      <Card style={{ marginBottom: 10, height: 435, borderRadius: 40, elevation: 5 }}>
        <CardItem cardBody style={{ borderTopWidth: 3, borderColor: '#0000FF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <Image source={usericon} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>

        <CardItem style={{ backgroundColor: '#FFF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 22 }} >Ayam Geprek</Text>
              <Text style={{ fontSize: 16 }} >Geprek Bensu </Text>
              <Text style={{ fontSize: 16 }} >Rp. 15.000,-</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 22 }} >Total</Text>
              <Text style={{ fontSize: 16 }} >Rp.15.000,- </Text>
            </View>
          </View>
        </CardItem>

        <CardItem style={{ backgroundColor: 'white', elevation: 5, marginTop: 10, height: 65, borderRadius: 50, marginHorizontal: 70 }}>
          <Left style={{}}>
            <TouchableOpacity>
              <MeIcon name="squared-minus"
                style={{ fontSize: 26, color: '#0000FF' }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ marginLeft: -20 }}>
            <Input value='1' style={{ width: 80, alignContent : 'center',  height: 60, borderWidth: 1, borderColor: '#0000FF', borderRadius: 10 }} />
          </Body>
          <Right>
            <TouchableOpacity>
              <MeIcon name="squared-plus"
                style={{ fontSize: 26, color: '#0000FF' }} />
            </TouchableOpacity>
          </Right>
        </CardItem>

        <TouchableOpacity>
          <CardItem style={{elevation: 10, marginTop: 10, height: 40, width : 60, borderRadius: 50, marginHorizontal: 160, justifyContent: 'center' }}>
          <Icon name="trash-alt"
                style={{ fontSize: 26, color: '#0000FF' }} />
          </CardItem>
        </TouchableOpacity>

      </Card >
    )
  }
}

export default CardImage
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
import { withNavigation } from 'react-navigation'
import Checkout from './Checkout';
import CardImage from '../component/cart/CardImage';
import Payment from '../component/cart/Payment';


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

class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <Container>
          <ScrollView>
            <CardImage />
          </ScrollView>
        </Container>

        <View>
          <Payment/>
        </View>

      </View>
    )
  }
}

export default Cart
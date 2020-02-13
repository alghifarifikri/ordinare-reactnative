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
import Checkout from '../../screens/Checkout';


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

class PaymentOriginal extends Component {
  render () {
    return(
        <Card >
          
        <CardItem style={{ backgroundColor: '#eee', elevation: 5, justifyContent : 'space-between', margin : 5, height: 35, borderRadius: 50, marginHorizontal: 70 }}>
          <Left style={{}}>
              <Icon name="coins"
                style={{ fontSize: 26, color: '#D4AF37' }} />
          </Left>

          <Body style = {{justifyContent : 'center', right : 30}}>
                <Text style = {{fontSize : 13}}> Rp. 15.000,- </Text>
          </Body>

          <Right>
            <TouchableOpacity style = {styles.button} onPress={()=>this.props.navigation.navigate('Checkout')}>
              <View>
              <Text style={styles.buttonText} >Payment</Text>
                </View>
            </TouchableOpacity>
          </Right>
        </CardItem>
        
        </Card>
    )
  }
}
const Payment = withNavigation (PaymentOriginal)

export default Payment
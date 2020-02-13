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
import usericon from '../image/ayamgeprek.jpg'
import { withNavigation } from 'react-navigation'

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
    fontSize: 11,
    textTransform:'uppercase'
  },
  menuTitle:{
    fontSize: 16,
    fontStyle : 'italic',
    padding : 5,
    alignItems : 'center',
    fontWeight : 'bold',
    color : '#000'
  },
})

class CardImage extends Component {
  render() {
    return (
      <Card style={{ marginBottom: 10, height: 400, borderRadius: 40, elevation: 5 }}>
        <CardItem cardBody style={{ borderTopWidth: 3, borderColor: '#0000FF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <Image source={usericon} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>

        <CardItem style={{ backgroundColor: '#FFF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 22 }} >Ayam Geprek</Text>
              <Text style={{ fontSize: 16 }} > Geprek Bensu </Text>
              <Text style={{ fontSize: 16 }} >Total: Rp.15.000,- </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 22 }} >Total</Text>
              <Text style={{ fontSize: 16 }} >Rp.15.000,- </Text>
            </View>
          </View>
        </CardItem>

        <CardItem style={{ backgroundColor: 'white', elevation: 5, marginTop: 10, height: 65, borderRadius: 50, marginHorizontal: 70 }}>
          <Left style={{}}>
            {/* <TouchableOpacity>
              <MeIcon name="squared-minus"
                style={{ fontSize: 26, color: '#0000FF' }} />
            </TouchableOpacity> */}

            <Text style = {styles.menuTitle}> Quantity : </Text>
          </Left>
          <Body style={{ marginLeft: -20 }}>
            <Input value='1' style={{ width: 80, height: 60, borderWidth: 1, borderColor: '#0000FF', borderRadius: 10 }} />
          </Body>
          {/* <Right>
            <TouchableOpacity>
              <MeIcon name="squared-plus"
                style={{ fontSize: 26, color: '#0000FF' }} />
            </TouchableOpacity>
          </Right> */}
        </CardItem>

        {/* <TouchableOpacity>
          <CardItem style={{elevation: 10, marginTop: 10, height: 40, width : 60, borderRadius: 50, marginHorizontal: 160, justifyContent: 'center' }}>
          <Icon name="trash-alt"
                style={{ fontSize: 26, color: '#0000FF' }} />
          </CardItem>
        </TouchableOpacity> */}

      </Card >
    )
  }
}

class Payments extends Component {
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
            <TouchableOpacity style = {styles.button} onPress={()=>this.props.navigation.navigate('Review')} >
            <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </Right>
        </CardItem>
        
        </Card>
    )
  }
}

const Payment = withNavigation (Payments)


class Footers extends Component {
  render(){
    return(
      <View>
      <View style={{backgroundColor:"#eee", height:5}}></View>
      <View style={{height:54, backgroundColor:'#fff', flexDirection: 'row'}}>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <View style={{width:26, height:26}}>
          <Icon name='home' style={styles.icon}/>
          </View>
          <Text style={{fontSize:12, fontWeight:'bold',color:'#0000FF', marginRight : 3}}>Home</Text>
        </View>
        
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <View style={{width:26, height:26}}>
          <Icon name='search' style={styles.icon}/>
           </View>
          <Text style={{fontSize:12, fontWeight:'bold',color:'#0000FF'}}>Search</Text>
        </View>

        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <View style={{width:26, height:26}}>
          <Icon name='shopping-cart' style={styles.icon}/>
            </View>
          <Text style={{fontSize:12, fontWeight:'bold',color:'#0000FF', marginLeft : 3}}>Cart</Text>
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <View style={{width:26, height:26}}>
          <Icon name='user-alt' style={styles.icon}/>
            </View>
          <Text style={{fontSize:12, fontWeight:'bold',color:'#0000FF', marginRight : 5}}>Profile</Text>
        </View>

      </View>
      </View>
    )
  }
}

export default class Checkout extends Component {
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
        
        {/* <View>
        <Footers/>
      </View> */}

      </View>
    )
  }
}
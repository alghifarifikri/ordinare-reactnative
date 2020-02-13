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
  Button,
  Form,
  Textarea
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MeIcon from 'react-native-vector-icons/Entypo'
import StarRating from 'react-native-star-rating';
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
    fontSize: 12,
    textTransform:'uppercase'
  },
})

class ReviewItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <Card style={{ marginBottom: 10, height: 530, borderRadius: 40, elevation: 5 }}>
        <ScrollView>

        <CardItem cardBody style={{ borderTopWidth: 3, borderColor: '#0000FF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <Image source={usericon} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>

        <CardItem style={{ backgroundColor: '#FFF', height : 80, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 22 }} >Ayam Geprek</Text>
              <Text style={{ fontSize: 16 }} >Geprek Bensu </Text>
            </View>
          </View>
        </CardItem>


        <CardItem style={{ backgroundColor: 'white', justifyContent : 'space-between', elevation: 5, marginTop: 10,
                           height: 50, borderRadius: 50, marginHorizontal: 70, marginBottom : 10,
                           justifyContent : 'center'}}>
            <StarRating 
              disabled={false}
              starSize = {30}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'yellow'}
            />

        </CardItem>

        <CardItem style={{ backgroundColor: '#FFF', borderBottomLeftRadius: 50, 
                           borderBottomRightRadius: 50, elevation: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            <Form>
              <Text> Review </Text>
              <Textarea rowSpan={3} style = {{borderRadius : 20}} bordered placeholder="Your Review" />
          </Form>
            </View>
          </View>
        </CardItem>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          <CardItem style={{elevation: 10, backgroundColor : '#0000FF', 
                            marginTop: 10, height: 40, width : 100, 
                            borderRadius: 50, marginHorizontal: 135, 
                            justifyContent: 'center', marginBottom : 5 }}>
            <Text style = {styles.buttonText}> Submit </Text>
          </CardItem>
        </TouchableOpacity>

        </ScrollView>
      </Card >
    )
  }
} 
const ReviewItem = withNavigation (ReviewItems)

export default class Review extends Component {

  

  render() {
    return (
      <View style={{ flex: 1 }}>

            <ReviewItem />

      </View>
    )
  }
}
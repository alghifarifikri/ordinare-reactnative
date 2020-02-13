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
import { getReview } from '../../redux/action/Review'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

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

class Reviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoading : true,
        }
      }

    async componentDidMount() {
        const id = this.props.navigation.getParam(`id`)
        await this.props.dispatch(getReview(id))
        this.setState({isLoading : false})
      }

  render () {
    return (
      <Card style = {styles.review}>
          <Text style = {{fontSize : 15, fontWeight : 'bold', color : '#000'}}> Review </Text>
        { !this.state.isLoading && 
        this.props.review.data.map((v, i)=>(
          <Card style = {{borderRadius : 20}} key = {i}>
            <CardItem style = {{borderRadius : 20}}>
              <Left>
                <Body>
                  <Text style = {{color : '#000'}}>{v.username}</Text>
                  <View style={{backgroundColor:"#eee", height:5, marginBottom : 5, marginTop : 5}}></View>
                  <View style = {{width : 50}}>
                  <StarRating 
                    disabled={true}
                    starSize = {12}
                    maxStars={5}
                    rating={v.rating}
                    fullStarColor={'yellow'}
                  />
                  </View>
                  <Text style = {styles.text}>{v.review}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        ))}
      </Card>
      
    )
  }
}

const Review = withNavigation (Reviews)
const mapStateToProps = state =>{
  return{
    review : state.review
  }
}

export default connect (mapStateToProps) (Review)
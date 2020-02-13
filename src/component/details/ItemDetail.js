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
import { getDetails } from '../../redux/action/Details'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { APP_URL } from '../../redux/action/config'

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

class ItemDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading : true,
    }
  }

  async componentDidMount() {
    const id = this.props.navigation.getParam(`id`)
    await this.props.dispatch(getDetails(id))
    this.setState({isLoading : false})
  }

  render () {
    return (
      <View style={styles.root}>
        { !this.state.isLoading && 
        this.props.details.data.map((v, i)=>(
        <View style = {styles.item} key = {i}>
          <Text style = {{fontWeight : 'bold', fontSize : 20, marginLeft : 10, color : '#000'}}> {v.name} </Text>
          <Text style = {{fontWeight : 'bold', fontSize : 15, marginLeft : 10, color : '#000'}}> {v.name_resto} </Text>
          <Text style = {{marginLeft : 10, color : '#000'}}> Rp. {v.price},- </Text>
          <View style = {{width : 50, marginLeft : 10}}>
                  <StarRating 
                    disabled={true}
                    starSize = {15}
                    maxStars={5}
                    rating={v.rating}
                    fullStarColor={'yellow'}
                  />
                  </View>

        </View>
        ))}
      </View>
    )
  }
}

const ItemDetail = withNavigation (ItemDetails)
const mapStateToProps = state =>{
  return{
    details : state.details,
  }
}

export default connect (mapStateToProps) (ItemDetail)
import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  Image ,TouchableOpacity
} from 'react-native'
import { 
  Container, 
  Header, 
  Tab, 
  Tabs, 
  ScrollableTab, 
  TabHeading, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail,
  Button, 
  Left, 
  Right,
  Body 
} from 'native-base'
import { ScrollView,  } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation'
import { getFood } from '../redux/action/Food'
import { connect } from 'react-redux'
import { APP_URL } from '../redux/action/config'
import Tabcategory from '../component/home/Tabcategory'
import CardRestaurant from '../component/home/CardRestaurant'
import Loading from './Loading'

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
  menuTitle:{
    fontSize: 20,
    fontStyle : 'italic',
    padding : 5,
    alignItems : 'center',
    fontWeight : 'bold',
    color : '#000'
  },
  menuSubTitle:{
    fontSize: 12,
    color: '#000',
    padding : 10,
    fontWeight : 'bold',
  },
  text:{
    fontSize: 12,
    color: '#000',
    fontWeight : 'bold',
    alignItems : 'center'
  },
  drop : {
    padding : 20,
    margin : -30
  },
  row:{
    flexDirection: 'row'
  },
  card:{
    flex:1,
    marginLeft: 15,
    marginRight:15,
    padding: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5
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
  icon : {
    fontSize : 22,
    color : '#0000FF'
  },
})

class Headers extends Component {
  render() {
    return (
      <View style = {styles.row}>
        <View style = {styles.banner}>
          <Text style = {styles.menuTitle}> Ordinare </Text>
      </View>
          <View>
            <TouchableOpacity>
              <Icon name='search' style={styles.icon,{top : 25, fontSize : 20, left : 220}}/>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

class Line extends Component {
  render () {
    return (
      <View style={{backgroundColor:"#eee", height:2}}></View>
    )
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading : true,
    }
  }

  async componentDidMount() {
    await this.setState({isLoading : false})
  }

  render() {
    return (
      <>
      {this.state.isLoading && <Loading/>}
      <Container>

          <Headers/>
          <Line/>
      
        <View>
          <Text style = {styles.menuSubTitle} > Our Partners </Text>
          <View style={{backgroundColor:"#eee", height:5}}/>
          <ScrollView horizontal = {true}>
            <CardRestaurant/>
          </ScrollView>
        </View>

        <View style={{backgroundColor:"#eee", height:5}}/>
       <Tabcategory/>

      </Container>
      </>
    )
  }
}

const mapStateToProps = state =>{
  return{
    food : state.food,
  }
}

export default connect (mapStateToProps) (Home)
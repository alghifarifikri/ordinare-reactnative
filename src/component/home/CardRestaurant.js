import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  Image 
} from 'react-native'
import { 
  Card, 
  CardItem,
  Spinner, 
} from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation'
import { getRestaurant } from '../../redux/action/CardRestaurant'
import { connect } from 'react-redux'
import { APP_URL } from '../../redux/action/config'

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
    fontSize: 9,
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

class CardRestaurants extends Component {

    constructor(props) {
        super(props)
        this.state = {
          isLoading : true,
        }
      }
    
      async componentDidMount() {
        await this.props.dispatch(getRestaurant())
        await this.setState({isLoading : false})
      }
    
  render() {
    return (
      <View style={styles.root} style = {{backgroundColor : '#eee'}}>
          <View style={styles.row}>

          {this.state.isloading && <Spinner color = 'green'/>}
          {
              !this.state.isLoading && this.props.cardrestaurant.data.map(v=> {
                return(
          
          <TouchableOpacity key = {v.id_resto} onPress={()=>this.props.navigation.navigate('MenuResto', {id : v.id_resto})}>
            <Card >
            <CardItem cardBody >
              <Image source = {{uri : APP_URL.concat(`storage/${v.logo}`)}} style={{ margin : 5,height: 100, width: '100%', flex: 1}}/>
            </CardItem>
            <CardItem style = {{justifyContent : 'center', height : 30, width : 110}}>
                  <Text style = {styles.text}>{v.name_resto}</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          
                )})
                }
          </View>
      </View>
      
    )
  }
}

const CardRestaurant = withNavigation (CardRestaurants)
const mapStateToProps = state =>{
    return{
      cardrestaurant : state.cardrestaurant
    }
  }
  
  export default connect (mapStateToProps) (CardRestaurant)
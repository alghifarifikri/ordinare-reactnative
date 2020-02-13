import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { 
  Container, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail,
  Left, 
  Right,
  Body,
  Spinner 
} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation'
import { getFood, getNext } from '../../redux/action/Food'
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
    color : '#0000FF',
  },
})

class AllFoods extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : {},
      isLoading : true,
    }
  }

  async componentDidMount() {
    await this.props.dispatch(getFood())
    await this.setState({isLoading : false})
  }

  handleLoadMore = () => {
    const url = this.props.food.data.Next
      console.log(url)
      if(url){
      this.props.dispatch(getNext(url))
  }
  };

  addCart = async () =>{
    const id_user = decode.id
    const {id} = this.props.match.params
    const url = APP_URL.concat(`user/selectitem`)
    await axios.post(url, {
        id_user : id_user,
        id_item : id,
        quantity : this.state.quantity
    },
    {headers: {
      Authorization: 'Bearer ' + token}})
  }

  render() {
    return(
     
    <Container style = {{backgroundColor : '#0000FF'}}>
       <View style={{backgroundColor:"#0000FF", height:5}}></View>
        <Content style = {{marginHorizontal : 10}}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
        <FlatList
              data={this.props.food.data}
              renderItem={({item}) => (
                <Card style = {{borderRadius : 20}}  >
            <CardItem style = {{borderRadius : 20}} >
              <Left>
                <Thumbnail source = {{uri : APP_URL.concat(`storage/${item.image}`)}} />
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details', {id : item.id_item})}>
                <Body>
                <Text style = {{color : '#000'}}>{item.name}</Text>
                <Text style = {styles.text}>Rp. {item.price},-</Text>
                <Text style = {styles.text}>{item.name_resto}</Text>

                 <View style = {{width : 50}}>
                  <StarRating 
                    disabled={true}
                    starSize = {15}
                    maxStars={5}
                    rating={item.rating}
                    fullStarColor={'yellow'}
                  />
                  </View>

                </Body>
               </TouchableOpacity>
              </Left>
                <TouchableOpacity>
              
                  <Icon name='cart-plus' style={styles.icon}/>
                
                </TouchableOpacity>
            </CardItem>
          </Card>
              )}
              keyExtractor={item => item.id_item}
              onEndReached={this.handleLoadMore}
              onEndThreshold={0}
            />
        )}

        </Content>
      </Container>
    )
  }
}

const AllFood = withNavigation (AllFoods)
const mapStateToProps = state =>{
  return{
    food : state.food,
  }
}

export default connect (mapStateToProps) (AllFood)
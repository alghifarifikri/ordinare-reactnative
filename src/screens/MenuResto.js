import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { 
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body
} from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getMenuResto } from '../redux/action/MenuResto';
import { APP_URL } from '../redux/action/config';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : "#fff",
    padding : 5
  },
  icon : {
    fontSize : 22,
    color : '#0000FF'
  },
})

class MenuRestos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading : true,
    }
  }

  async componentDidMount() {
    const id = this.props.navigation.getParam(`id`)
    await this.props.dispatch(getMenuResto(id))
    this.setState({isLoading : false})
  }
  render () {
    return(
      <Container style = {{backgroundColor : '#0000FF'}}>
        
       <View style={{backgroundColor:"#0000FF", height:5}}></View>

        <Content style = {{marginHorizontal : 10}}>
        { !this.state.isLoading && 
        this.props.menuresto.data.map((v, i)=>(

        <ScrollView>
        <TouchableOpacity key = {v.id_item} onPress={()=>this.props.navigation.navigate('Details', {id : v.id_item})}>
          <Card key = {i} style = {{borderRadius : 20}}>
            <CardItem style = {{borderRadius : 20}}>
              <Left>
                <Thumbnail source = {{uri : APP_URL.concat(`storage/${v.image}`)}} />
                <Body>
                  <Text>{v.name}</Text>
                  <Text style = {styles.text}>Rp. {v.price},-</Text>

                 <View style = {{width : 50}}>
                  <StarRating 
                    disabled={true}
                    starSize = {15}
                    maxStars={5}
                    rating={v.rating}
                    fullStarColor={'yellow'}
                  />
                  </View>

                </Body>
                <Icon name='cart-plus' style={styles.icon}/>
              </Left>
            </CardItem>
          </Card>
          </TouchableOpacity>
          </ScrollView> 
            ))}
        </Content>
      
      </Container>
    )
  }
}

const MenuResto = withNavigation (MenuRestos)
const mapStateToProps = state =>{
  return{
    menuresto : state.menuresto
  }
}

export default connect (mapStateToProps) (MenuResto)

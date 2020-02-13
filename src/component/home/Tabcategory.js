import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  Image 
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
  Body 
} from 'native-base' 
import Allfood from './Allfood'
import Chickenfood from './Chickenfood'
import Localdrinks from './Localdrinks'
import Thaitea from './Thaitea'
import Snack from './Snack'
import Vegetarian from './Vegetarian'

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


class Tabcategory extends Component {
  render (){
    return (

      <Tabs locked={true} renderTabBar={()=> <ScrollableTab underlineStyle={{backgroundColor:"#0000FF"}}
       style={{backgroundColor:"#fff", paddingLeft:5, marginTop:5, height : 30}} />}>
            
            <Tab heading={ <TabHeading style={{backgroundColor:"#fff"}}>
            <Text>All Food</Text>
            </TabHeading>}>
          <Allfood/>
          </Tab>
          
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Chicken Food</Text>
            </TabHeading> }>
            <Chickenfood/>
          </Tab>
         
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Local Drinks</Text>
            </TabHeading>}>
            <Localdrinks/>
          </Tab>
          
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Thai Tea</Text>
            </TabHeading>}>
            <Thaitea/>
          </Tab>

          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Snack</Text>
            </TabHeading>}>
            <Snack/>
          </Tab>

          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Vegetarian</Text>
            </TabHeading>}>
            <Vegetarian/>
          </Tab>

        </Tabs>
     )
  }
}

export default Tabcategory
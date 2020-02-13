import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Card, Container, Content } from 'native-base'
import image from '../image/login.jpg'

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
    width : '90%',
    padding:10
  },
  title:{
    alignItems:'center',
    marginBottom: 10,
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 25
  },
  input:{
    borderWidth:1,
    borderRadius: 8,
    paddingLeft: 20,
    margin : 10,
    fontSize: 15
  },
  formItem:{
    marginTop: 5,
    marginBottom: 5,
  },
  button:{
    backgroundColor: '#0000FF',
    borderRadius: 8,
    height: 45,
    marginLeft : 10,
    marginRight : 10,
    flex : 1,
    marginBottom : 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textTransform:'uppercase'
  },
  backgroundImage : {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    flex : 1
  },
  imagebg : {
    resizeMode : 'cover',
    opacity : 0.9
  },
  container : {
    flex : 1
  },
  row:{
    flexDirection: 'row'
  },
})

export default class Register extends Component {
  render() {
    return (

      <Container style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source = {image} imageStyle = {styles.imagebg}>
        <View>
          <Card style = {{borderRadius : 20, width : 350, opacity : 0.6}}>
          
              <View style={styles.formItem}>
                <TextInput style={styles.input} placeholder='Username' />
              </View>
              <View style={styles.formItem}>
                <TextInput style={styles.input} placeholder='Password' />
              </View>
              <View style={styles.formItem, styles.row}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>             
              </View>
              
          </Card>
        </View>
        </ImageBackground>
      </Container>
    )
  }
}

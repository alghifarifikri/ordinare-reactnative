import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Card, Container, Content } from 'native-base'
import image from '../image/login.jpg'
import { connect } from 'react-redux'
import { postLogin } from '../redux/action/Login'
import Loading from './Loading'

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
  alert : {
    fontWeight: 'bold',
    margin: 5,
    alignItems: 'center',
  }
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      isSuccess: false,
      msg: false,
    }
  }

  async componentDidMount() {
    await this.setState({isLoading : false})
  }

  async login() {
    const { username, password } = this.state
        const data = {
            username,
            password,
        }
    await this.props.dispatch(postLogin(data))
    console.log(this.props.login.data.msg)
    if(await this.props.login.success === true){
      this.props.navigation.navigate('Home')
    } else {
      this.setState({
        msg: true
      })
    }
  }

  render() {
    const { msg } = this.state
    return (

      <Container style={styles.container}>
        {this.state.isLoading && <Loading/>}
        <ImageBackground style={styles.backgroundImage} source = {image} imageStyle = {styles.imagebg}>
        <View>
          
          <Card style = {{borderRadius : 20, width : 350, opacity : 0.6}}>
              
              <View style={styles.formItem}>
                <TextInput style={styles.input} value={this.state.username} onChange={(e) => this.setState({ username: e.nativeEvent.text })} placeholder='Username' />
              </View>
              <View style={styles.formItem}>
                <TextInput style={styles.input} secureTextEntry value={this.state.password} onChange={(e) => this.setState({ password: e.nativeEvent.text })} placeholder='Password' />
              </View>
              <View style = { styles.alert }>
                {msg && <Text style = { styles.alert }>{this.props.login.data.msg}</Text>}
              </View>
              <View style={styles.formItem, styles.row}>
                <TouchableOpacity style={styles.button} onPress = {() => this.login()}>
                  <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>              
              </View>
               
          </Card>
        </View>
        </ImageBackground>
      </Container>
    )
  }
}

const mapStateToProps = state =>{
  return{
    login : state.login
  }
}

export default connect (mapStateToProps) (Login)


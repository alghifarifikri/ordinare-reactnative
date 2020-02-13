import React from 'react';
import { StyleSheet,
         Text,
         View,
         ImageBackground
         } from 'react-native';
         
import image from '../image/splash.jpg'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

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

class SplashScreens extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    setTimeout(() => {
      if (!this.props.login.data.auth) {
        this.props.navigation.navigate('Login')
    } else {
        this.props.navigation.navigate('Home')
    }
}, 3000)
}

  render() {
    return(
        <View style={styles.container}>
             <ImageBackground style={styles.backgroundImage} source = {image} imageStyle = {styles.imagebg}></ImageBackground>
        </View>
    );
  }
}

const SplashScreen = withNavigation(SplashScreens)

const mapStateToProps = state => {
    return {
        login: state.login,
    }
}

export default connect(mapStateToProps)(SplashScreen);
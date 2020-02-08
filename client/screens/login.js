import React, { Component } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

export default class Login extends Component {
  constructor(){
  }

  render() {
    return(
      <View>
        <ImageBackground source={require('../assets/img/backgroundLogin.png')} style={styles.imagen}>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imagen:{
    width: '112%',
    height: '103%',
    bottom: '4%',
    left: '0%',
    position: 'relative'
  },
});



import React, { Component } from 'react';
import { Image, Text, StyleSheet, ImageBackground, AsyncStorage, Alert } from 'react-native';
import {  Container, Content, Header, Button, Left, Right, Body, Icon, Card,CardItem, Label, Input,Item } from 'native-base';
export default class Detalle extends Component{
    constructor(props) {
      super(props);
      this.state ={
        id: '',
        titulo: '',
        contenido: '',
        img: ''
      }
    }

    componentDidMount(){
      this.localStoragge();
    }

    localStoragge = async () =>{
      try{
           this.setState({ id: await AsyncStorage.getItem('id')})
      }
      catch(error){
          console.log(error)
      }
    }

    back = async() =>{
      try{
        await AsyncStorage.clear();
      }
      catch(err){
        alert(err)
      }
      return this.props.navigation.push('Inicio');
    }

    getTips = () => {
      this.setState({ruta: `/recicler/getTips?id=${this.state.id}`})

      let header = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }

      return fetch(this.state.API,header)
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach(element => {
          this.setState({titulo: element.titulo, contenido: element.contenido,img: element.img})
        });
      })
      .catch((error) => {
        console.error(error);
      })
    }


    render() {
        return (
          <Container>
              <ImageBackground source={require('../assets/img/background.png')} style={styles.container}>
              <Content transparent>
                <Image source={require('../assets/iconos/regreso.png')} onPress={this.back}/>
              </Content>
                <Content transparent>
                  <Card transparent>
                    <CardItem style={styles.card}>
                      <Body style={{alignItems: 'center'}}>
                        <Image source={{uri: this.state.img}} style={styles.logo}/>
                      </Body>
                    </CardItem>
                    <CardItem style={styles.card}>
                      <Body style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>{this.state.titulo}</Text>
                      </Body>
                    </CardItem>
                    <CardItem style={styles.card}>
                      <Body style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>{this.state.contenido}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
              </ImageBackground>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '105%',
    height: '100%',
    position: 'relative',
    right: '4%',
},
tituloCartelera: {
    flex: 1,
    width: '100%',
    fontSize: 30,
    textAlign: "center",
    marginTop: '18%',
    color: '#EFFBF8',
},
content: {
    flex: 1,
    justifyContent: 'center',
    width: '75%',
    marginLeft: '13%',
    marginBottom: '20%'
},
textoHeader: {
    marginTop: 10,
    color: '#ffffff',
    fontSize: 20
},
img: {
    height: '20%',
    width: '30%'
},
cartelera: {
    flex: 3,
    alignItems: 'center',
    fontWeight: 'bold'
},
header: {
    flex: 1,
    flexDirection: 'row'
},
logo: {
    width: 250,
    height: 250,
    borderRadius: 25,
    resizeMode: 'contain'
},
titulo: {
  textAlign: 'center',
  color: 'white',
  fontSize: 17,
  paddingBottom: 5,
  paddingTop: 15
},
card: {
  backgroundColor: '#ffffffa9'
}
})
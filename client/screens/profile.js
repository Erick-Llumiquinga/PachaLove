import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Icon, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import base64 from 'react-native-base64';

export default class Perfil extends Component{
    constructor(props) {
        super(props);
        this.state = {
          nombre: '',  
          email: '',
          nuevaClave: '',
          repClave: '',
          img: '',
          ruta:'',
          API: ''
        }
    }


    async componentDidMount() {
      this.setState({API: `http://192.168.100.12:8001/server/${this.state.ruta}`});
    }

    localStoragge = async () =>{
        try{
             this.setState({ email: await AsyncStorage.getItem('email')})
        }
        catch(error){
            console.log(error)
        }
    }

    getDatos = () => {
      this.setState({ruta: `getData?email=${this.state.email}`})

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
          this.setState({nombre: element.nombre, img: element.img})
        });
      })
      .catch((error) => {
        console.error(error);
      })
    }

    cambioClave = () => {

      this.setState({ruta: 'updatePass'})

      let datos =  {
        email: this.state.email,
        nuevaClave: base64.encode(this.state.clave),
        repClave: base64.encode(this.state.repClave),
      }
     
      let header = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
      }

      return fetch(this.state.API,header)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.ok != false){
            alert('Todo Bien!')
        }
      })
      .catch((error) => {
        console.error(error);
      })
    }

    cambioDatos = () => {

      this.setState({ruta: 'updateData'})

      let datos =  {
        email: this.state.email,
        nombre: this.state.nombre,
        img: this.state.img,
      }
     
      let header = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
      }

      return fetch(this.state.API,header)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.ok != false){
            alert('Todo Bien!')
        }
      })
      .catch((error) => {
        console.error(error);
      })
    }

    signOut = async () => {
      try{
        await AsyncStorage.clear();
      }
      catch(err){
        alert(err)
      }
    }

    back = () =>{
      return this.props.navigation.push('Inicio')
    }

    render() {
        return (
          <Container>
              <Content style={styles.container}>
                <Content style={styles.container}>
                  <Content>
                    <Image source={require('../assets/iconos/regreso.png')} onPress={this.back}/>
                    <Text onPress={this.signOut}>Cerrar Sesion <Image source={require('../assets/iconos/cerrar-sesion.png')}/></Text>
                  </Content>
                  <Content>
                    <Image source={{uri: this.state.img}}/>
                    <Text>{this.state.nombre}</Text>
                  </Content>
                    <Label>Informacio Personal</Label>
                  <Content>
                    <Text onPress={() =>this.props.navigation.push('Menu')}><Image source={require('../assets/iconos/proteger.png')}/> Datos Persoanles</Text>
                    <View style={styles.hairline} />
                    <Text onPress={() =>this.props.navigation.push('Menu')}><Image source={require('../assets/iconos/cerrar-sesion.png')}/> Cambiar Contraseña</Text>
                    <View style={styles.hairline} />
                  </Content>
                </Content>
              </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //position: 'relative',
    backgroundColor: '#1E1C1C'
  },
  textoHeader: {
    color: '#ffffff',
    fontSize: 25,
    left: '10%'
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.336)', 
    top: '12%',
    borderRadius: 15,
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '100%'
  }
})
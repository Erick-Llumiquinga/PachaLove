import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Icon, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          ruta:'',
          API: '',
          nombre: '',
          img: ''
        }
    }


     componentDidMount() {
      this.setState({API: `http://192.168.100.12:8001/server/${this.state.ruta}`});
    }

    localStoragge = async () =>{
        try{
             this.state.usuario = await AsyncStorage.getItem('User');
        }
        catch(error){
            console.log(error)
        }
    }

    realizarPedido = () => {
      let tabla = "pedido";

        let data = {
            tabla: tabla,
            datos:
              {
                platoId: 1,
                descripcion: this.state.plato,
                cantidad: 2,
              }
        };

        let header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        return fetch(API,header)
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.ok != false){
                alert('Pedido realizado')
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    getClima = () => {
      this.setState({ruta: `getDatasTime`})

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

    signOut = async () => {

    }

    render() {
        return (
          <Container>
            <ImageBackground source={require('../assets/img/background.png')} style={styles.container}>
            <Header hasTabs style={styles.header}>
              <Left>
                <FontAwesomeIcon icon={faUser}/>
              </Left>
              <Body>
                <Text style={styles.textoHeader}>Inicio</Text>
              </Body>
              <Right>
              <FontAwesomeIcon icon={faEllipsisV} style={{right: '10%'}}/>
              </Right>
            </Header>
            <Content>
              <Label>10º C</Label>
              <Text>Presipitacion baja</Text>
            </Content>
            <Content>
            <Label>10º C</Label>
            <Text>OR</Text>
            <Text>OR</Text>
            <Text>OR</Text>
            <View style={styles.hairline} />
            </Content>
            <Content>
            </Content>
            </ImageBackground>
          </Container>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '112%',
    height: '104%',
    position: 'relative',
    right: '0%',
    bottom: '3%'
  },
  textoHeader: {
    color: '#ffffff',
    fontSize: 25,
    left: '10%'
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.336)', 
    //top: '12%',
    borderRadius: 15,
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '100%'
  }
})

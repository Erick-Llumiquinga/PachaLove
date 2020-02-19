import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Icon, Badge,Thumbnail, Left, Body, Right } from 'native-base';


const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Home extends Component{
    constructor(props) {
        super(props);
        this.getPlatos();
        this.state = {
            plato: this.plato,
            valor: this.valor,
            datos: []
        }
    }


    async componentDidMount() {
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

    getPlatos = () => {

        let header = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

       return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.ok != false){
                    this.state.datos = responseJson.datos
                    alert(this.state.datos)
                }
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
            <Header hasTabs style={{backgroundColor: 'black'}}/>
            <ImageBackground source={require('../assets/img/background.png')} style={styles.container}>
            <Content>
              <FlatList data={this.state.datos} renderItem={({item}) => <Text>{item.plato}</Text>}/>
            </Content>
            </ImageBackground>
            <Footer style={styles.footer}>
  <FooterTab style={{backgroundColor: 'rgba(107, 115, 47, 0.616)'}}>
    <Button badge vertical onPress={() => this.props.navigation.push('Inicio')}>
      <Badge><Text>5</Text></Badge>
      <Icon name="apps" />
      <Text>Menu</Text>
    </Button>
    <Button vertical onPress={() => this.props.navigation.push('Pedidos')}>
      <Icon name="list" />
      <Text>Pedidos</Text>
    </Button>
    <Button vertical onPress={ async () => {
                        try{
                          await AsyncStorage.clear();
                        }
                        catch(error){
                          console.log(error)
                        }
                        return  this.props.navigation.push('Login');}}>
      <Icon name="exit" />
      <Text>Salir</Text>
    </Button>
  </FooterTab>
</Footer>
          </Container>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    right: '0%',
    top: '0%'
  },
  footer: {
    position:'absolute',
    bottom: '0%'
  }
})

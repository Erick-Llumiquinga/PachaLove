import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Icon, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';


const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Tips extends Component{
    constructor(props) {
        super(props);
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
              <Content style={styles.container}>
              <Header hasTabs style={styles.header}>
              <Left>

              </Left>
              <Body>
                <Text style={styles.textoHeader}>Inicio</Text>
              </Body>
              <Right>

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
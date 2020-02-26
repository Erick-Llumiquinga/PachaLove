import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button,  Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { Icon } from 'react-native-elements'


const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Huerto extends Component{
    constructor(props) {
        super(props);
        this.state = {
          plantas: []
        }
    }


    componentDidMount() {
      this.getPlantas();
    }

    localStoragge = async () =>{
        try{
             this.state.usuario = await AsyncStorage.getItem('User');
        }
        catch(error){
            console.log(error)
        }
    }

    getPlantas = () => {

      const API = 'http://192.168.100.3:3000/server/allPlants';
      let header = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }

      return fetch(API,header)
      .then((response) => response.json())
      .then((responseJson) => { 
        this.setState({plantas: responseJson})
      })
      .catch((error) => {
        console.error(error);
      })
    }

  

    render() {
        return (
          <Container>
            <ImageBackground source={require('../assets/img/plantas.jpg')} style={styles.background}>
                <Header hasTabs style={styles.header}>
                  <Left> 
                    <Icon name='user-circle' type='font-awesome' color='white' size={32} onPress={() => this.props.navigation.push('Perfil')}/>         
                  </Left>
                  <Body>
                    <Text style={styles.textoHeader}>Mi Huerto </Text>
                  </Body>
                  <Right>
                    <Icon name='more-vert' type='material' color='white' size={40} style={{right: '5%'}} onPress={() => this.props.navigation.push('Menu')}/>
                  </Right>
                </Header>
            <View style={{top: '10%'}}>
              <Button block  style={styles.btn} onPress={()=> this.props.navigation.push('Nueva')}>
                <Text style={{color: 'white', fontSize: 20}}>Nueva Planta </Text>
              </Button>
            </View>
            <Content style={{top: '20%', marginHorizontal: '5%'}}>
            <Label style={{color: 'whitea', fontSize: 20, marginBottom: '10%'}}>Registro de Sembrios</Label>
            {
              this.state.plantas.map(item => 
                <View style={{flex: 1, flexDirection: 'row', marginVertical: '3%'}}>
                  <Left >
                    <View >
                      <Text style={{fontSize: 17}}>{item.nombre}</Text>  
                    </View>
                    <View style={styles.hairline} /> 
                  </Left>
                  <Right>
                    <View>
                      <Text style={{fontSize: 17}}>{item.suelo}</Text>  
                    </View>
                    <View style={styles.hairline} /> 
                  </Right>
                </View>
              )
            }
          </Content>
            </ImageBackground>
          </Container>

        )
    }
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    resizeMode: 'cover'
  },
  textoHeader: {
    color: '#ffffff',
    fontSize: 25,
    left: '10%'
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.534)', 
    borderRadius: 10,
    top: '5%',
    width:'100%'
  },
  hairline: {
    backgroundColor: '#000000',
    height: 1,
    width: '100%'
  },
  btn: {
    backgroundColor: 'rgba(102, 255, 0, 0.411)',
    justifyContent: 'center',
},
})
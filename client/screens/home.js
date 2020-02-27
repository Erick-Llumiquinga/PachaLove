import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, ScrollView, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { Icon } from 'react-native-elements'

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          ruta:'',
          correo: '',
          img: '',
          clima: {},
          user: {},
          climaArray: [],
          latitud: '',
          longitud: ''
        };

        this.statusUser = false
    }

     componentDidMount() {
      this.getClima();
      this.localStoragge();
      
    }

    localStoraggeUser = async (res) =>{
        try{
          await AsyncStorage.setItem('User', JSON.stringify(res))
        }
        catch(error){
          console.log(error)
        }
    }

    localStoragge = async () =>{
      try{
           this.setState({correo:  await AsyncStorage.getItem('Correo')});
      }
      catch(error){
          console.log(error)
      }
      this.getDatos();
    }

    clearLocalStoragge = async () =>{
      try{
           await AsyncStorage.removeItem('User')
      }
      catch(error){
          console.log(error)
      }
    }

    getClima = () => {
      alert('JSON.stringify(data)')
      navigator.geolocation.getCurrentPosition((posiscion) => {
        let latitud= posiscion.coords.latitude;
        let longitud = posiscion.coords.longitude;
        var fecha = new Date();
        let data =  {
          fecha: fecha,
          ubicacion: `${latitud.toString()}, ${longitud.toString()}`,
          user: 'Erick'
        }
        
        alert(JSON.stringify(data))
      })
    }

    getClimaHora = () => {

      const API = 'http://192.168.100.3:3000/server/client/getDatasTimeHour';
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
        this.setState({clima: responseJson[0]})
        this.setState({climaArray: responseJson})
      })
      .catch((error) => {
        console.error(error);
      })
    }

    getDatos = () => {

      this.clearLocalStoragge()

      const API = `http://192.168.100.3:3000/server/getDataUser?correo=${this.state.correo}`;

      if(this.statusUser === false){
        
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
          this.setState({user: responseJson})
          this.localStoraggeUser(responseJson)
        })
        .catch((error) => {
          console.error(error);
        })
      }
      else{
        alert('no se guarda' + JSON.stringify(this.state.user));
      }

    }

    render() {
        return (
          <Container >
            <ImageBackground source={require('../assets/img/home.jpg')} style={styles.background}>
            <Header hasTabs style={styles.header}>
              <Left> 
                <Icon name='user-circle' type='font-awesome' color='white' size={32} onPress={() => this.props.navigation.push('Perfil')}/>         
              </Left>
              <Body>
                <Text style={styles.textoHeader} onPress={this.get} onPress={this.getClima}>Inicio </Text>
              </Body>
              <Right>
                <Icon name='more-vert' type='material' color='white' size={40} style={{right: '5%'}} onPress={() => this.props.navigation.push('Menu')}/>
              </Right>
            </Header>
          <Content style={{top: '10%'}}>
              <Label style={{textAlign: 'center', fontSize: 80, color: 'white'}}>{this.state.clima.temperatura} ºF</Label>
              <Text style={{textAlign: 'center', fontSize: 20, marginTop: '5%', color: 'white'}}>{this.state.clima.resumen}</Text>
          </Content>
          <Content>
            <Label>Aviso de la planta</Label>
            {
              this.state.climaArray.map(item => 
                <View style={{flex: 1, flexDirection: 'row', marginVertical: '3%'}}>
                  <Left >
                    <View >
                      <Text style={{fontSize: 20, color: 'white'}}>{item.tiempo}</Text>  
                    </View>
                    <View style={styles.hairline} /> 
                  </Left>
                  <Body>
                    <View >
                      <Text style={{fontSize: 20, color: 'white'}}>{item.velocidadViento} MPH</Text>  
                    </View>
                    <View style={styles.hairline} /> 
                  </Body>
                  <Right>
                    <View>
                      <Text style={{fontSize: 20, color: 'white'}}>{item.temperatura} ºF</Text>  
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
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '100%'
  }
})

/*

        let latitud = posiscion.coords.latitude 
        let longitud = posiscion.coords.longitude;

        alert(latitud)
        const API = `http://192.168.100.3:3000/server/client/getDatasTime?lat=${latitud}`;

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
          this.getClimaHora();
        })
        .catch((error) => {
          console.error(error);
        })

*/
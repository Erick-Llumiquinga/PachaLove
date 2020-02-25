import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import base64 from 'react-native-base64';
import { Icon } from 'react-native-elements'

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
          API: '',
          user: {}
        }
    }


    async componentDidMount() {
      this.localStoragge();
      this.setState({API: `http://192.168.100.12:8001/server/${this.state.ruta}`});
    }

    localStoragge = async () =>{
        try{
             this.setState({ user: JSON.parse(await AsyncStorage.getItem('User'))})
        }
        catch(error){
            console.log(error)
        }
    }

    /*getDatos = () => {
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
    }*/

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
                <Header hasTabs style={styles.header} >
                  <Left> 
                    <Icon name='reply' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Inicio')}/>        
                  </Left >
                  <Right>
                    <Icon name='sign-out' type='octicon' color='white' size={25} onPress={() => this.props.navigation.push('Perfil')}/>
                    <Text onPress={this.signOut}>Cerrar Sesion  </Text>
                  </Right>
                </Header>
                  <Content style={styles.user}>
                    <Icon name='user-circle' type='font-awesome' color='white' size={200} />
                    <Image source={{uri: this.state.img}} />
                    <Text>{this.state.user.nombre}</Text>
                  </Content>
                    
                  <Content style={{marginTop: '30%', height: '100%'}}>
                    <Label>Informacio Personal</Label>
                    <Icon name='verified-user' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Inicio')}/>
                    <Text onPress={() =>this.props.navigation.push('Menu')}>Datos Persoanles</Text>
                    <View style={styles.hairline} />
                    <Text onPress={() =>this.props.navigation.push('Menu')}>Cambiar Contraseña</Text>
                    <View style={styles.hairline} />
                  </Content>
                </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //resizeMode: 'cover',
    height: '100%',
    backgroundColor: '#1E1C1C'
  },
  textoHeader: {
    color: '#ffffff',
    fontSize: 25,
    left: '10%'
  },
  header: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    top: '5%',
    width:'100%'
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '100%'
  },
  back: {
    height: '10%',
    width: '10%',
    padding: '15%'
  },
  user: {
    top: '5%'
  }
})
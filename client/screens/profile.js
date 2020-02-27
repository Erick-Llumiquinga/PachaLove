import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import base64 from 'react-native-base64';
import { Icon } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';

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
          user: {},
          loading: false
        }
    }


    componentDidMount() {
      this.localStoragge();
    }

    cargar = async () => {
      if(this.state.usuario != "" && this.state.clave != ""){
          try{
              await this.setState({loading: true})
          }
          catch(err){
              alert(err)
          }
          return this.signOut();    
      } 
      
      return alert("Campos Vacios")
  }

    localStoragge = async () =>{
        try{
             this.setState({ user: JSON.parse(await AsyncStorage.getItem('User'))})
        }
        catch(error){
            console.log(error)
        }
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

    back = () =>{
      return this.props.navigation.push('Inicio')
    }

    signOut = async () =>{
      try{
           await AsyncStorage.clear();
      }
      catch(error){
          console.log(error)
      }
      this.setState({loading: false})
      this.props.navigation.push('Login');
  }

    render() {
        return (
          <Container>
                <Content style={styles.container}>
                <Header hasTabs style={styles.header} >
                  <Left> 
                    <Icon name='reply' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Inicio')}/>        
                  </Left >
                  <Right onPress={this.cargar}>
                  <Text onPress={this.signOut} style={{color: 'white'}} >Cerrar Sesion</Text>
                    <Icon name='sign-out' type='octicon' color='white' size={25}/>
                  </Right>
                </Header>
                  <Content style={styles.user}>
                    <Icon name='user-circle' type='font-awesome' color='white' size={200} />
                    <Image source={{uri: this.state.img}} />
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 28, marginTop: '5%'}}>{this.state.user.nombre}</Text>
                  </Content>
                    
                  <Content style={{marginTop: '30%', height: '100%'}}>
                    <Label style={{fontSize: 20, color: 'white'}}>Informacio Personal</Label>
                    <View style={{flex: 1, flexDirection: 'row', marginVertical: '3%', marginHorizontal: '5%'}}>
                  <Body>
                    <View >
                      <Text style={{fontSize: 20, color: 'white'}}>Correo: {this.state.user.correo}</Text>  
                    </View>
                    <View style={styles.hairline} /> 
                  </Body>
                </View>
                  </Content>
                </Content>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Cargando..'}
                    color='white'
                    overlayColor='rgba(0, 0, 0, 0.568)'
                    textStyle={styles.spinnerTextStyle}
                />
          </Container>
        )
    }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: 'white'
},
  container: {
    flex:1,
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
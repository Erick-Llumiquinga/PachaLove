import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, Text, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, Item,CardItem, Footer, Input,FooterTab, Button, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { Icon } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';

const API_URL = 'http://127.0.0.1:8001/server/menu/platos'

export default class Nueva extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            suelo: '',
            planta: '',
            fecha: '',
            loading: false
        }
    }


    componentDidMount() {
    }

    cargar = async () => {
      if(this.state.nombre != "" && this.state.planta != "" && this.state.suelo){
          try{
              await this.setState({loading: true})
          }
          catch(err){
              alert(err)
          }
          return this.postPlanta();    
      } 
      
      return alert("Campos Vacios")
  }

    handlePlanta = text => {
      this.setState({ planta: text });
    };

    handleNombre = text => {
      this.setState({ nombre: text });
    };

    handleSuelo = text => {
      this.setState({ suelo: text });
    };

    postPlanta = () => {

      const API = 'http://192.168.100.3:3000/server/newPlant'

        let data = {
            nombre: this.state.nombre,
            suelo: this.state.suelo,
            planta: this.state.planta,
            fecha: ''
          }

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
          this.setState({loading: false})
          return this.props.navigation.push('Huerto')
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
          <ImageBackground source={require('../assets/img/nuevaSiembra.jpg')} style={styles.background}>
          <Header hasTabs style={styles.header} >
                  <Left> 
                    <Icon name='reply' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Huerto')}/>        
                  </Left >
                  <Body>
                    <Text style={styles.textoHeader}>Nueva Siembra</Text>
                  </Body>
                  <Right />
            </Header>
          <Content style={{top: '5%', marginHorizontal: '5%'}}>
          <Label style={{color: 'whitea', fontSize: 20, marginBottom: '10%'}}>Información de tu plantita!</Label>
          <View style={{flex: 1, flexDirection: 'row'}}>
           <Body >
              <Item inlineLabel>
                  <Label style={styles.input}>Planta:</Label>
                  <Input style={styles.textoBlanco} onChangeText={this.handlePlanta}/>
              </Item>
              <Item inlineLabel last>
                  <Label style={styles.input}>Nombre:</Label>
                  <Input style={styles.textoBlanco}  onChangeText={this.handleNombre} />
              </Item>
              <Item inlineLabel last>
                  <Label style={styles.input}>Tipo de suelo:</Label>
                  <Input style={styles.textoBlanco} onChangeText={this.handleSuelo} />
              </Item>
            </Body>
          </View>
          <View style={styles.hairline} />
        </Content>
        <View>
            <Button block  style={styles.btn} onPress={this.cargar}>
              <Text style={{color: 'white', fontSize: 20}}>Guardar</Text>
            </Button>
          </View>
          </ImageBackground>
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
  background: {
    flex:1,
    resizeMode: 'cover'
  },
  textoHeader: {
    color: '#ffffff',
    fontSize: 20,
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
  btn: {
    backgroundColor: 'rgba(102, 255, 0, 0.411)',
    justifyContent: 'center',
  },
  input : {
    color: '#ffffff',
    fontSize: 17,
    left: '10%'
  },
})
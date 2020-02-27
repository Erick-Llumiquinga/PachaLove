import React, { Component } from 'react';
import { Image, Text, StyleSheet, ImageBackground, AsyncStorage, Alert } from 'react-native';
import {  Container, Content, Header, Button, Left, Right, Body, Card,CardItem, Label, Input,Item } from 'native-base';
import { Icon } from 'react-native-elements'
export default class Detalle extends Component{
    constructor(props) {
      super(props);
      this.state ={
        tips: {}
      }
    }

    componentDidMount(){
      this.localStoragge();
    }

    localStoragge = async () =>{
        try{
          this.setState({tips: JSON.parse(await  AsyncStorage.getItem('tips'))}) 
        }
        catch(error){
            console.log(error)
        }
    }

    deleteStoragge = async () =>{
        try{
             await AsyncStorage.clear();
        }
        catch(error){
            console.log(error)
        }
        this.props.navigation.push('Home');
    }

    render() {
        return (
          <Container>
              <ImageBackground source={require('../assets/img/background.jpg')} style={styles.background}>
              <Header hasTabs style={styles.header} >
                  <Left> 
                    <Icon name='reply' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Tips')}/>        
                  </Left >
                  <Body>
                    <Text style={styles.textoHeader}>Nueva Siembra</Text>
                  </Body>
                  <Right />
            </Header>
                <Content transparent style={{top: '5%'}}>
                  <Card transparent>
                  <CardItem style={styles.card}>
                      <Body style={{alignItems: 'center'}}>
                        <Image source={{uri: this.state.tips.imagen}} style={styles.logo}/>
                        <Label>Descripcion:</Label>
                        <Text>{this.state.tips.descripcion}</Text>
                      </Body>
                    </CardItem>
                    <CardItem style={styles.card}>
                      <Body style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>{this.state.tips.titulo}</Text>
                      </Body>
                    </CardItem>
                    <CardItem style={{backgroundColor: '#c9c7c7a9'}} footer bordered>
                    <Body>
                      <Label>Contenido</Label>
                      <Text>{this.state.tips.contenido}</Text>
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
  background: {
    flex:1,
    resizeMode: 'cover'
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
  backgroundColor: 'transparent', 
  borderRadius: 10,
  top: '5%',
  width:'100%'
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
})
import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, ScrollView, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { Icon } from 'react-native-elements'

const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Tips extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tips: []
        }
    }

    componentDidMount(){
      this.getData();
    }

    getData = () => {

      const API_URL = `http://192.168.100.3:3000/server/time/allTips`;
      const header = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }

      return fetch(API_URL, header)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({tips: responseJson})
      })
      .catch((err) => {
        alert(err)
      })

    }

    localStoragge = async (data) => {
      try{
          await AsyncStorage.setItem('tips', data);
      }
      catch(error){
          console.log(error);
      }
      this.props.navigation.push('Detalle');
  }

    render() {
        return (
          <Container>
          <ImageBackground source={require('../assets/img/siembra.jpg')} style={styles.background}>
          <Header hasTabs style={styles.header}>
              <Left> 
                <Icon name='user-circle' type='font-awesome' color='white' size={32} onPress={() => this.props.navigation.push('Perfil')}/>         
              </Left>
              <Body>
                <Text style={styles.textoHeader} onPress={this.get} onPress={this.getClima}>Tips </Text>
              </Body>
              <Right>
                <Icon name='more-vert' type='material' color='white' size={40} style={{right: '5%'}} onPress={() => this.props.navigation.push('Menu')}/>
              </Right>
            </Header>
          <ScrollView style={{marginHorizontal: '5%', top: '5%'}}>
            <Content>
              {
                this.state.tips.map(item => 
                  <TouchableOpacity onPress={() => this.localStoragge(JSON.stringify(item))} key={item._id}>
                  <Card style={{backgroundColor: 'rgba(107, 153, 54, 0.527)'}} >
                    <CardItem header style={styles.card} bordered>
                      <Left>
                        <Thumbnail large  source={{uri:  item.imagen}} />
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>{item.titulo}</Text>
                      </Left>
                    </CardItem>
                    <CardItem footer style={styles.card}>
                      <Text style={{color: 'white', fontSize: 16}}>{item.descripcion}</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                )
              }
            </Content>
          </ScrollView>
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
  },
  card: {
    backgroundColor: 'transparent'
  }
})
import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';
import { Icon } from 'react-native-elements'

const API_URL = 'http://192.168.100.12:8001/server/menu/platos'
const API = 'http://192.168.100.12:8001/server/menu'
export default class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {
    }

    render() {
        return (
          <Container style={styles.container}>
            <Header hasTabs style={styles.header} >
                  <Left> 
                    <Icon name='reply' type='material' color='white' size={35} onPress={() => this.props.navigation.push('Inicio')}/>        
                  </Left >
                  <Right />
            </Header>
              <Content style={{marginHorizontal: '10%'}}>
                  <View style={{top: '10%', }}>
                    <Label style={{textAlign: 'center', fontSize: 40, color: 'white'}}>Menu</Label>
                  </View>
                    <View style={{marginTop: '20%', position: 'relative', }}>
                        <Text onPress={() =>this.props.navigation.push('Huerto')} style={{color: 'white', fontSize: 20, marginTop: '15%'}}>Mi Huerto</Text>
                        <View style={styles.hairline} />
                        <Text onPress={() =>this.props.navigation.push('Reciclaje')} style={{color: 'white', fontSize: 20, marginTop: '15%'}}>Tips Reciclaje</Text>
                        <View style={styles.hairline} />
                        <Text onPress={() =>this.props.navigation.push('Inicio')} style={{color: 'white', fontSize: 20, marginTop: '15%'}}>Tips Sembrio</Text>
                        <View style={styles.hairline} />
                    </View>
              </Content>
          </Container>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  }
})

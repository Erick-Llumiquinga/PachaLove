import React, { Component } from 'react';
import { Image, Modal, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Footer, FooterTab, Button, Text, Icon, Badge,Thumbnail, Left, Body, Right, Label } from 'native-base';


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
          <Container>
              <Content style={styles.container}>
                <Content style={styles.container}>
                    <Label>Menu</Label>
                    <Content>
                        <Text onPress={() =>this.props.navigation.push('Huerto')}>Mi Huerto</Text>
                        <View style={styles.hairline} />
                        <Text onPress={() =>this.props.navigation.push('Reciclaje')}>Tips Reciclaje</Text>
                        <View style={styles.hairline} />
                        <Text onPress={() =>this.props.navigation.push('Inicio')}>Tips Sembrio</Text>
                        <View style={styles.hairline} />
                    </Content>
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

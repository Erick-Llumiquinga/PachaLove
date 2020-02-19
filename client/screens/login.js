import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button, Spinner  } from 'native-base';

const API_URL = "http://192.168.100.12:8001/server/login";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            usuario: '',
            clave: ''
        };
    }

    handleUsuario = text => {
        this.setState({ usuario: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
    }

    localStoragge = async () => {
        try{
            await AsyncStorage.setItem('User', this.state.usuario);
        }
        catch(error){
            console.log(error);
        }
    }

    login = () => {

        const header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.state.usuario,
                clave: this.state.clave
            })
        }

       return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.mensaje != 'inc'){
                    this.localStoragge();
                    return this.props.navigation.push('Inicio')
                }
                return alert('Datos incorrectos')
            })
            .catch((error) => {
                console.error(error);
            })

    }


    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/img/backgroundLogin.png')} style={styles.container}>

                    <Content contentContainerStyle={styles.content}>

                            <Text style={styles.titulo}>
                            ORDER
                             </Text>


                    <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                        <Label style={styles.input1}>Correo:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleUsuario}/>
                                    </Item>
                                    <Item inlineLabel last>

                                        <Label style={styles.input3}>Clave:</Label>

                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>

                                    </Item>

                                    <Button rounded style={styles.btn} onPress={() =>this.props.navigation.push('Registro')}>
                                        <Text style={styles.txt} >Ingresar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2} onPress={() => this.props.navigation.push('Registro')}>
                                        <Text style={styles.txt} >Registrarse</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '112%',
        height: '104%',
        position: 'relative',
        right: '0%',
        bottom: '3%'
    },
    cardMom: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 30,
        right: '8%',
    },
    titulo: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontSize: 60,
        marginLeft: '24%',
        color: 'rgb(78, 80, 80)',

    },
    cargando: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontSize: 60,
        marginLeft: '24%',
        color: '#EFFBF8',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '75%',
        height: '100%',
        marginLeft: '13%',
        paddingBottom: '25%',


    },
    card: {
        backgroundColor: 'rgba(106, 115, 39, 0.616)',
        paddingBottom: '10%',
        borderRadius: 30,
    },
    input1: {
        color: '#EFFBF8',
        fontSize: 20,
        left: '50%'
    },
    input2: {
        color: '#EFFBF8',
        fontSize: 20,

    },
    input3: {
        color: '#EFFBF8',
        fontSize: 20,
        left: '50%'

    },
    input4: {
        color: '#EFFBF8',
        fontSize: 25,
        paddingTop: '5%',


    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: 'rgb(163, 118, 79)',
        width: '50%',
        justifyContent: 'center',
    },
    btn2: {
        marginTop: '5%',
        marginLeft: '25%',
        backgroundColor: 'rgb(133, 95, 62)',
        width: '50%',
        justifyContent: 'center',

    },
    txt: {
        color: 'white',
        fontSize: 15,
    },
    textoBlanco: {
        color: '#ffffff'
    }
});

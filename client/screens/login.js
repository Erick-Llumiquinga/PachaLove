import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button  } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

const API_URL = "http://192.168.100.30:3000/server/login";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            usuario: '',
            clave: '',
            loading: false
        };
    }

    cargar = async () => {
        if(this.state.usuario != "" && this.state.clave != ""){
            try{
                await this.setState({loading: true})
            }
            catch(err){
                alert(err)
            }
            return this.login();    
        } 
        
        return alert("Campos Vacios")
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
            await AsyncStorage.setItem('Correo', this.state.usuario);
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
                correo: this.state.usuario,
                clave: this.state.clave
            })
        }

       return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                
                this.localStoragge();
                this.setState({loading: false})
                return this.props.navigation.push('Inicio')
            })
            .catch((error) => {
                console.error(error);
            })

    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/img/backgroundLogin.jpg')} style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                            <Text style={styles.titulo}>
                                PACHA
                                {"\n"}
                                LOVE
                             </Text>
                    <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body >
                                    <Item inlineLabel>
                                        <Label style={styles.input1}>Correo:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleUsuario}/>
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label style={styles.input3}>Clave:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>
                                    </Item>
                                    <Button rounded style={styles.btn} onPress={this.cargar}>
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
                <Spinner
                    visible={this.state.loading}
                    textContent={'Cargando..'}
                    color='white'
                    overlayColor='rgba(0, 0, 0, 0.568)'
                    textStyle={styles.spinnerTextStyle}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: 'white'
    },
    container: {
        flex:1,
        resizeMode: 'cover'
    },
    cardMom: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 30,
        width: '80%',
        left: '5%',
        top: '10%'
    },
    titulo: {
        flex: 1,
        width: '100%',
        height: '50%',
        marginTop: '14%',
        fontSize: 60,
        right: '5%',
        textAlign: "center",
        color: 'white',

    },
    cargando: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontSize: 60,
        color: '#EFFBF8',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: '25%',
    },
    card: {
        backgroundColor: '#00000059',
        borderRadius: 30,
        width: '100%',
    },
    input1: {
        color: '#EFFBF8',
        fontSize: 20,
        left: '10%'
    },
    input3: {
        color: '#EFFBF8',
        fontSize: 20,
        left: '10%'
    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: 'rgba(102, 255, 0, 0.411)',
        width: '50%',
        justifyContent: 'center',
    },
    btn2: {
        marginTop: '5%',
        marginLeft: '25%',
        backgroundColor: '#22649688',
        width: '50%',
        justifyContent: 'center',

    },
    txt: {
        color: 'white',
        fontSize: 15,
    },
    textoBlanco: {
        color: '#ffffff',
        textAlign: 'right'
    }
});

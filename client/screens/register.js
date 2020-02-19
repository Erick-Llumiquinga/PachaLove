import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button, AsyncStorage } from 'native-base';


const API_URL = "http://192.168.100.12:8001/server/menu";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            nombre: '',
            correo: '',
            clave: ''
        };
    }

    handleNombre = text => {
        this.setState({ nombre: text });
    };

    handleCorreo = text => {
        this.setState({ correo: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
        await Font.loadAsync({
            'bign-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        })
    }

    saveData = () => {
        let tabla = "persona";

        let data = {
            tabla: tabla,
            datos:
              {
                tipoRolId: 2,
                nombre:  this.state.nombre,
                correo: this.state.correo,
                clave: this.state.clave
              }
        };

        let header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        if(this.state.nombre != "" && this.state.correo != "" && this.state.clave != ""){
            return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.ok != false){
                    alert('Registro Exitoso')
                    return this.props.navigation.push('Login')
                }
                return alert('Error de servidor')
            })
            .catch((error) => {
                console.error(error);
            })
        }
            return alert("Campos Vacios")
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/img/background.png')} style={styles.container}>

                    <Content contentContainerStyle={styles.content}>
                    {this.state.fontLoaded == true ? (
                        <Text style={styles.registrar1}>
                            INGRESA TUS DATOS
                         </Text>
                         ) : (<Text style={styles.registrar2}>Loading...</Text>)
                        }
                        <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Nombre:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleNombre} />
                                    </Item>

                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Correo:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleCorreo}/>
                                    </Item>

                                    <Item inlineLabel last>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.clave1}>Clave:</Label>
                                        ) : (<Text style={styles.clave2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>
                                    </Item>
                                    <Button rounded style={styles.btn} onPress={this.saveData}>
                                        <Text style={styles.txt}>Registrar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2} onPress={() => {this.props.navigation.push('Login')}}>
                                        <Text style={styles.txt}>Login</Text>
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
        width: '100%',
        height: '100%',
        position: 'relative',
        right: '0%',
        top: '0%'
    },
    registrar1: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',
    },
    registrar2: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontSize: 30,
        marginLeft: '5%',
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
    cardMom: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 30
    },
    card: {
        backgroundColor: 'rgba(73, 94, 61, 0.719)',
        paddingBottom: '10%',
        borderRadius: 30,
    },
    user1: {
        color: '#EFFBF8',
        fontSize: 20    ,
    },
    user2: {
        color: '#EFFBF8',
        fontSize: 20,
    },
    clave1: {
        color: '#EFFBF8',
        fontSize: 20,
    },
    clave2: {
        color: '#EFFBF8',
        fontSize: 25,
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

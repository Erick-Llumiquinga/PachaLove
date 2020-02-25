import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';


const API_URL = "http://192.168.100.30:3000/server/register";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            nombre: '',
            correo: '',
            clave: '',
            loading: false
        };
    }

    cargar = async () => {
        if(this.state.nombre != "" && this.state.correo != "" && this.state.clave != ""){
            try{
                await this.setState({loading: true})
            }
            catch(err){
                alert(err)
            }
            return this.saveData();    
        } 
        
        return alert("Campos Vacios")
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

        let data = 
              {
                tipoRolId: 2,
                nombre:  this.state.nombre,
                correo: this.state.correo,
                clave: this.state.clave
              }
    

        let header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.ok != false){
                    this.setState({loading: false})
                    return this.props.navigation.push('Login')
                }
                return alert('Error de servidor')
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
                            INGRESA TUS DATOS
                         </Text>
                        <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body>
                                    <Item inlineLabel>
                                        <Label style={styles.input}>Nombre:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleNombre} />
                                    </Item>
                                    <Item inlineLabel>
                                        <Label style={styles.input}>Correo:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleCorreo}/>
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label style={styles.input}>Clave:</Label>
                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>
                                    </Item>
                                    <Button rounded style={styles.btn} onPress={this.cargar}>
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
        width: '80%',
        left: '5%',
        top: '10%'
    },
    titulo: {
        flex: 1,
        width: '100%',
        height: '50%',
        marginTop: '25%',
        fontSize: 30,
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
    input: {
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

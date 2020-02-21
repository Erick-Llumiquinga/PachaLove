import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Home from '../screens/home';
import Menu from '../screens/menu';
import Huerto from '../screens/huerto';
import NuevaSiembra from '../screens/nuevaSiembra';
import Reciclaje from '../screens/Tips';
import DetalleReciclaje from '../screens/detalleReciclaje';
import Perfil from '../screens/profile';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        },
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            headerShown: false
        },
    },
    Inicio: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        },
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            headerShown: false
        }
    },
    Huerto: {
        screen: Huerto,
        navigationOptions: {
            headerShown: false
        }
    },
    Reciclaje: {
        screen: Reciclaje,
        navigationOptions: {
            headerShown: false
        }
    },
    Nueva: {
        screen: NuevaSiembra,
        navigationOptions: {
            headerShown: false
        }
    },
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            headerShown: false
        }
    },
    Detalle: {
        screen: DetalleReciclaje,
        navigationOptions: {
            headerShown: false
        }
    }
}


const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);

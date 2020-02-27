import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';

import Login from './pages/login';
import AddTip from './pages/addTip';
import AddSuelo from './pages/addSuelo';
import AddPlanta from './pages/addPlanta';
import Page404 from './pages/Page404';
import Register from './pages/register';
import PreHome from './pages/prehome';
import Plantas from './pages/plantas';
import Suelos from './pages/suelos';
import Tips from './pages/tips';

import Rooms from './pages/rooms';
import FilmsRoom from './pages/films_room';
import FilmsRoomAdd from './pages/films_room_add';
import Schedules from './pages/schedules';
import Reportes from './pages/reporte';
// import chart from './pages/chart';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ PreHome } />
            <Route exact path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/add_tip" component={ AddTip } />
            <Route path="/add_suelo" component={ AddSuelo } />
            <Route path="/add_planta" component={ AddPlanta } />

            <Route path="/plantas" component={ Plantas } />
            <Route path="/suelos" component={ Suelos } />
            <Route path="/tips" component={ Tips } />

            <Route path="/rooms" component={ Rooms } />
            <Route path="/films_room" component={ FilmsRoom } />
            <Route path="/films_room_add" component={ FilmsRoomAdd } />
            {/* <Route path="/chart" component={chart}/> */}
            <Route path="/schedules" component={ Schedules } />
            <Route path="/reportes" component={ Reportes } />

            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();

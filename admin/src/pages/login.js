
import React, { Component } from 'react';
import axios from 'axios';

// const API_LOGIN = "http://192.168.100.89:5000/server/login";
const API_LOGIN = "http://localhost:3000/server/login";


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_LOGIN, this.state)
      .then(response => {
        // eslint-disable-next-line
        if (response.data == "Loggeded") {
          window.location.assign("http://localhost:3001/add_tip");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { correo, clave } = this.state
    return (
 

<div class="bg-image-1 h-screen w-screen">
  <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
    <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-gray-700 deg sm:mx-0">
      <div class="flex flex-col w-full md:w-1/2 p-4">
        <div class="flex flex-col flex-1 justify-center mb-8">
          <h1 class="text-4xl text-center font-thin font-h">PACHALOVE</h1>
          <div class="w-full mt-4">
            <form class="form-horizontal w-3/4 mx-auto"  onSubmit={ this.loginAccess }>
              <div class="flex flex-col mt-4">
                <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="text"
                  placeholder="Correo"
                  name="correo"
                  value={ correo }
                  onChange={ this.changeHandler }/>
              </div>
              <div  class="flex items-center mt-4">
                <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="password"
                  placeholder="*******"
                  name="clave"
                  value={ clave }
                  onChange={ this.changeHandler } 
                  securetextentry="true"/>
              </div>
              <div class="flex items-center mt-4">
                <input type="checkbox" name="remember" id="remember" class="mr-2"/> <label for="remember" class="text-sm text-grey-dark">Recordarme</label>
              </div>
              <div class="flex flex-col mt-8">
                <button type="submit" class="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded">
                 Ingresar
                </button>
                <br/>
                <a href="http://localhost:3001/" className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded text-center">
                  Regresar
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:w-1/2 rounded-r-lg bac-im "/>
    </div>
  </div>
</div>



    )
  }
}

export default Login;

import React, { Component } from 'react';
import axios from 'axios';

// const API_URL = "http://192.168.100.89:5000/server/register";
const API_URL = "http://localhost:3000/server/register";


class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  registerUser = e => {
    e.preventDefault()
    this.post = {
          nombre: this.state.nombre,
          correo: this.state.correo,
          clave: this.state.clave
  }
    if (this.post.nombre === "" || this.post.correo === "" || this.post.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.post)
      .then(response => {
        if ( response.data != "" ) {
          alert("Usuario registrado correctamente")
          window.location.assign("http://localhost:3001/");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    
    return (
      <div className="bg-image-1 h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
            
            <div className="border-teal p-8 border-t-12 bg-transparent mb-6 rounded-lg shadow-lg">
              <form className="px-8 pt-6 pb-8 mb-4 bg-transparent rounded" onSubmit={ this.registerUser }>
                <div className="mb-4">
                  <label className="font-bold -700 block mb-2 text-white ">Nombre</label>
                  <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={ this.state.nombre }
                  onChange={ this.changeHandler } 
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold text-white block mb-2">Correo Electrónico</label>
                  <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="text"
                  placeholder="correo electronico"
                  name="correo"
                  value={ this.state.correo }
                  onChange={ this.changeHandler } 
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold text-white block mb-2">Contraseña</label>
                  <input className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                  type="password"
                  placeholder="*******"
                  name="clave"
                  value={ this.state.clave }
                  minLength="6"
                  onChange={ this.changeHandler } 
                  securetextentry="true"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="bg-gray-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Registrarse
                  </button>
                  <a href="http://localhost:3001/" className="bg-gray-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Volver
                  </a>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;

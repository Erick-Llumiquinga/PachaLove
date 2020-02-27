import React, { Component } from 'react';

import axios from 'axios';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
// import ImageBase64 from 'image-to-base64';

import '../styles/tailwind.css';

// const API = "http://192.168.100.89:5000/server/suelo/newSuelo";
const API = "http://172.16.11.127:3000/server/suelo/newSuelo";



//codigo
class AddSuelo extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      descripcion: '',
      tratamiento: '',
      imagen: '',
      estado: true
    }

    this.onFileChange= this.onFileChange.bind(this);
  }

 

  changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                tratamiento: this.state.tratamiento,
                estado: this.state.estado,
                imagen: this.state.imagen
            
        }

        if (this.post.nombre === "" ||
            this.post.descripcion === "" ||
            this.post.tratamiento === "" 
            ) {
          alert("Complete todos campos porfavor");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data === true ) {
                alert("Agregado exitosamente")
                window.location.assign("http://localhost:3001/add_suelo");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    onFileChange(e) {
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({
          imagen: reader.result
        })
        console.log(reader.result)
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }


    render() {
      
        return(
            <div>
                 <Header />
                 <div class="absolute">
                    <Sidebar />
                 </div>
               
               
                <div className="ml-80  mr-8">
                    <hr />
                    <main className="my-8">
                        <p className="text-center my-5 text-2xl">Agregar nuevo Suelo</p>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-8" onSubmit={ this.saveData }>
                            {/* <a className="p-1" href="/">
                              <input type='file' onChange={this.onFileChange} ></input>
                            </a> */}
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="nombre">
                                        Nombre
                                    </label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Suelo"
                                        name="nombre"
                                        value={ this.state.nombre }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 ">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="descripcion">
                                        Descripcion
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Descripcion"
                                        name="descripcion"
                                        value={ this.state.descripcion }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="tratamiento">
                                        Tratamiento
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Tratamiento"
                                        name="tratamiento"
                                        value={ this.state.tratamiento }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                                {/* <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="recomendacion">
                                        Recomendacion
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Recomendacion"
                                        name="recomendacion"
                                        value={ this.state.recomendacion }
                                        onChange={ this.changeHandler } 
                                    />
                                </div> */}
                                
                            </div>
                            {/* <div className="-mx-3 md:flex mb-6 ">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="recomendacion">
                                        Recomendacion
                                    </label>
                                    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                        type="text" 
                                        placeholder="Recomendacion"
                                        name="recomendacion"
                                        value={ this.state.recomendacion }
                                        onChange={ this.changeHandler } 
                                    />
                                </div>
                            </div> */}
                          
                            
                            <div className="mt-4">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}

export default AddSuelo;
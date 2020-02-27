/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

// const API = "http://192.168.100.89:5000/server/planta/allPlanta";
const API = "http://172.16.11.127:3000/server/planta/allPlanta";


class Plantas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasDisponible: [],
            plantas: [],
        }
    }

    componentDidMount() {
        axios.get(API+"?estado=1")
        .then(response => {
            this.setState({ peliculasDisponible: response.data })
        })
        .catch(error => {
            console.log(error)
        })

        axios.get(API)
        .then(response => {
            this.setState({ plantas: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    logicDelete = (item) => {
        axios.put(`${API}?id=${item}`, {
            
                id: item,
                estado: 0
             
        })
        .then(response => {
            window.location.assign("http://localhost:3000/plantas");
        })
        .catch(error => {
            console.log(error);
        });
    }

    updateMovie = (p_id, p_titulo, p_resumen, p_imagen, p_categoria, p_valorBoleto) => {
        localStorage.setItem('id', p_id);
        localStorage.setItem('titulo', p_titulo);
        localStorage.setItem('resumen', p_resumen);
        localStorage.setItem('imagen', p_imagen);
        localStorage.setItem('categoria', p_categoria);
        localStorage.setItem('valorBoleto', p_valorBoleto);
        window.location.assign("http://localhost:3000/putFilm");
    }

    render() {
        // const { 
        //   peliculasDisponible,
        //    plantas } = this.state
       

        return(
            <div>
               <Header />
                <div class="absolute">
                <Sidebar />
                </div>
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        {/* <p className="text-center my-5 text-2xl">Cartelera Disponible</p>
                        <div className="flex flex-wrap items-center justify-center">
                        { peliculasDisponible.map(element => 
                            <div className="max-w-md w-full lg:flex" key={ element.id }>
                                <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={ element.imagen } alt="imagen" />
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-black font-bold text-xl mb-2">Título: { element.titulo }</div>
                                        <p className="text-grey-darker text-base">Resumen: { element.resumen }</p>
                                    </div>
                                    <div className="flex items-center">
                                       
                                        <div className="text-sm">
                                            <p className="text-black leading-none">Categoria: { element.categoria }</p>
                                            <p className="text-grey-dark">Valor: $ { element.valorBoleto }</p>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                                            onClick={ () => this.updateMovie(element.id, element.titulo, element.resumen, element.imagen, element.categoria, element.valorBoleto) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                            </svg>
                                            <span className="mr-2">Actualizar</span>
                                        </button>
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                                            onClick={ () => this.logicDelete(element.id) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                            </svg>
                                            <span className="mr-2">Eliminar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) }
                        </div> */}

                      
                       

                        <p className="text-center my-5 text-2xl">Plantas</p>
                        <div className="flex flex-wrap items-center justify-center">
                        { this.state.plantas.map(element => 
                            <div className="max-w-md w-full lg:flex" key={ element.id }>
                                <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={ element.imagen } alt="imagen" />
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-black font-bold text-xl mb-2">{ element.nombre }</div>
                                        <p className="text-grey-darker text-base">{ element.descripcion }</p>
                                        <p className="text-grey-darker text-base">{ element.tipo }</p>

                                    </div>
                                    {/* <div className="flex items-center">
                                     
                                        <div className="text-sm">
                                            <p className="text-black leading-none">{ element.categoria }</p>
                                            <p className="text-grey-dark">Valor: $ { element.valorBoleto }</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ) }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Plantas;
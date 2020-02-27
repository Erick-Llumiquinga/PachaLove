/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/raw3";

class FilmsRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                sala: 'Nombre de la Sala',
                pelicula: 'Película',
                horario: 'Horario',
            },
            sala_peliculas: [],
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ sala_peliculas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/films_room");
    }

    render() {
        const { sala_peliculas } = this.state
        return(
            <div>
                <Header />,
               <div class="absolute">
               <Sidebar />,
               </div>
                
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                       
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.sala }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.pelicula }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.horario }</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idsala_nombre} </p>) }
                                        </td>
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idpelicula_titulo} </p>) }
                                        </td>
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idhorario_hora} </p>) }
                                        </td>
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ () => this.deleteData(element.id) } className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></p> )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default FilmsRoom;
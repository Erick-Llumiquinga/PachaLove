import React, { Component } from "react";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

const API = "http://localhost:5000/film/raw4";

// Resolves charts dependancy
charts(FusionCharts);

export default class Reportes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        pelicula: 'Película',
        boletos: 'Cantidad de Boletos',
        precio: 'Precio Unitario $'

      },
      reporte: [],
    };
  }

  componentDidMount() {
    axios.get(API)
    .then(response => {
      this.setState({ reporte: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { reporte } = this.state
    const datos = {
      chart: {
        caption: "Reporte de Compras",
        subcaption: `Películas más aceptadas por los usuario`,
        showpercentvalues: "1",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext: "<h1>$percentValue</h1> recaudado por <h1>$label</h1>",
        theme: "fusion",
        baseFont: "Verdana",
        baseFontSize: "15",
        baseFontColor: "#0066cc",
      },
      data: this.state.reporte
    };

    const chartConfigs = {
      type: 'doughnut2d',
      dataSource: datos,
      width: "800",
      height: "600",
    };
    // return (<ReactFusioncharts {...chartConfigs} />);
    return(
      <div>
        <Header />
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
                          <th className="text-left p-3 px-5">{ this.state.table_header.pelicula }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.boletos }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.precio }</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                          <td>
                              { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.label} </p>) }
                          </td>
                          <td>
                              { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.value} </p>) }
                          </td>
                          <td>
                              { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.value} </p>) }
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>

              <div className=" sm:ml-6 sm:mr-6 pb-8 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                    <div>
                      <div className="text-center px-6">
                        <div className="">
                          <div className=" flex-grow flex-no-shrink ">
                            <ReactFusioncharts {...chartConfigs} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
      </div>
    )
  }
}
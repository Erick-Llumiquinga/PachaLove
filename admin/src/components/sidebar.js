/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";


const Sidebar = () => (
    <div class="px-1 py-8 flex mb-0 -ml-3">
    <div class="ml-g mt-0 px-10 py-2 w-46 h-screen bg-transparent  ">
        <img class="rounded-full w-38 h-40 border-4" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hipster-123-887999.png" alt="Mount"></img>
        <h1 class=" mt-1 py-4  ml-8 text-2sl font-bold text-left text-gray-400 flex mb-2" >INFORMACION </h1>
            
            <Link to="/plantas">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Plantas
                </button>
            </Link>
            <Link to="/suelos">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                        Suelos
                </button>
            </Link>
            <Link to="/tips">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Tips
                </button>
            </Link>


        <h1 class=" mt-1 py-4  ml-8 text-2sl font-bold text-left text-gray-400 flex mb-2" >MENU </h1>
            <Link to="/add_tip">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Agregar Tips
                </button>
            </Link>
            <Link to="/add_suelo">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Agregar Suelo
                </button>
            </Link>
            <Link to="/add_planta">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Agregar Planta
                </button>
            </Link>
            {/* <Link to="/films_room_add">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Asignar Plantas
                </button>
            </Link>
            <Link to="/films_room">
                <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-1">
                    <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png"  alt="yo"/>
                    Plantas Asignadas
                </button>
            </Link> */}


   
    </div>
   
</div>

)

export default Sidebar;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";


const Header = () => (
         
    <body>
        <nav class="font-sans bg-white text-center flex justify-between items-center my-4 mx-auto container overflow-hidden">
            
            <Link to="/add_tip">
                <a href="#" class="font-c font-semibold text-2xl ">
                   PACHA LOVE
                </a>
            </Link>
            <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
                {/* <li>
                    <Link to="/movies">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Cartelera
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/add_movie">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Nueva Película
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/rooms">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Nueva Sala
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/schedules">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Horario
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/films_room_add">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Asignar Peliculas
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/reportes">
                        <button class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
                            Reportes
                        </button>
                    </Link>
                </li> */}
              
            </ul>
            <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
                <li>
                <Link to="/">
                    <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
                        Salir
                    </button>
               </Link>
                   
                </li>
            </ul>
        </nav>
    </body>
    // <body>
    //     <nav class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
    //         <a href="/" class="block text-left">
    //             <img src="https://stitches.hyperyolo.com/images/logo.png" class="h-10 sm:h-10 rounded-full" alt="logo"/>
    //         </a>
    //         <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
    //             <li>
    //                 <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Products</a>
    //             </li>
    //             <li>
    //                 <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Pricing</a>
    //             </li>
    //             <li class="pr-2">
    //                 <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">FAQs</a>
    //             </li>
    //             <li class="pl-2 border-l">
    //                 <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Log In</a>
    //             </li>
    //             <Link to="/movies">
    //                 <button  class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">
    //                     Cartelera
    //                 </button>
    //             </Link>
    //             <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
    //                 Sign Up
    //             </button>   
    //         </ul>
    //     </nav>
    // </body>

// <header className="lg\:px-16 px-0 bg-gray-800 flex flex-wrap items-center lg\:pt-0 py-6 mb-0 ">
//     <div className="flex-1 flex justify-between items-center">
//         <a href="#">
//             <svg width="32" height="36" viewBox="0 0 32 36" ></svg>
//         </a>
//     </div>
//     <label for="menu-toggle" className="pointer-cursor lg:hidden block">
//         <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> 
//         <title> Menu </title> 
//         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//         </svg>
//     </label>
//     <input className="hidden" type="checkbox" id="menu-toggle" />
//     <div className="hidden lg:flex lg:items-center lg:w-auto w-full mr-3" id="menu">
//                 <Link to="/movies">
//                     <button className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
//                     <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="" alt="Andy Leverenz"></img>

//                     </button>
//                 </Link>
//                 <Link to="/">
//                     <button className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
//                     <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://img.icons8.com/color/48/000000/enter-2.png" alt="Andy Leverenz"></img>

//                     </button>
//                 </Link>
//     </div>
// </header>
 
                 
    
)

export default Header;
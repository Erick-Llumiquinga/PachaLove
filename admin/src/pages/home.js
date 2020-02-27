/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const Home = () => {
  return (
      <body class="bg-white">
          
          <Header />
          <div class="absolute">
    <Sidebar />
          </div>
   
  
        
        <div className=" h-screen">
             
                <div  class="max-w-6xl bg-transparent rounded-lg mx-80 my-16 p-32 ">
    <div class=" flex -mt-16 mt-0 w-screen px-0  ml-1 shadow-lg   max-w-2xl lg:max-w-4xl   sm:max-w-xl ">

        <div class="flex  w-3/5 items-center rounded-lg bg-gray-700  overflow-hidden">
            <img class="ml-6 h-12 w-8 flex-shrink-0" src="https://img.icons8.com/plasticine/100/000000/name.png" alt=""></img>
                    <div class="px-4 py-4">
                        <p class="  text-gray-400 text-sm">Clientes</p>
                        <h3 class="text-lg font-bold text-gray-400">25</h3>
                    </div>
        </div>

        <div class="flex  w-3/5 items-center rounded-lg bg-gray-700  overflow-hidden">
            <img  class="ml-6 h-8 w-8 flex-shrink-0" src="https://img.icons8.com/office/80/000000/test-failed.png" alt=""></img>
                      <div class="px-6 py-4" >
                          <p class="text-gray-400 text-sm" >Work Orders</p>
                          <h3 class="text-lg font-semibold text-gray-400" >70</h3>
                      </div>
        </div>

        <div class="flex w-3/5 items-center rounded-lg bg-gray-700  overflow-hidden">
            <img  class="ml-6 h-8 w-8 flex-shrink-0" src="https://img.icons8.com/officel/80/000000/magazine.png" alt=""></img>
                      <div class="px-6 py-4" >
                          <p class=" text-gray-400 text-sm" >New Invoices</p>
                          <h3 class=" text-lg font-semibold text-gray-400" >44</h3>
                      </div>
        </div>

        <div  class="flex w-4/5 items-center rounded-lg bg-gray-700  overflow-hidden " >
            <img  class="ml-6 h-8 w-8 flex-shrink-0" src="https://img.icons8.com/dusk/64/000000/open-box.png" alt=""></img>
                      <div class="px-6 py-4" >
                         <p class="text-gray-400 text-sm" >Open Cases</p>
                         <h3 class="text-lg font-semibold text-gray-400" >35</h3>
                     </div>
        </div>
    </div>

    <div class=" absolute mt-64 w-full px-1 lg:w-1/3 xl:w-1/3  sm:flex">
            <div class="flex items-center rounded-lg bg-gray-500 shadow-lg overflow-hidden  " >
                <img  class="ml-6 h-8 w-6 flex-shrink-0" src=" https://img.icons8.com/offices/80/000000/content.png" alt=""></img>
                    <div class="px-6 py-4" >
                        <h3 class="text-lg font-bold text-gray-800" >500</h3>
                        <p class="text-gray-600 text-sm" >  APPLICATIONS</p>
                    </div>
            </div>
    </div>

    <div class="mt-6 w-full px-1 lg:w-1/2 xl:w-1/3">
          <div class="flex items-center rounded-lg bg-gray-500 shadow-lg overflow-hidden" >
              <img  class="ml-6 h-8 w-8 flex-shrink-0" src="https://img.icons8.com/plasticine/100/000000/calendar.png" alt=""></img>
                  <div class="px-6 py-4" >
                      <h3 class="text-lg font-bold text-gray-800" >100</h3>
                      <p class="text-gray-600 text-sm" > INTERVIEWS</p>
                  </div>
          </div>
    </div>

    <div class="mt-6 w-full px-1 lg:w-1/3 xl:w-1/3">
          <div class="flex items-center rounded-lg bg-gray-500 shadow-lg overflow-hidden" >
              <img  class="ml-6 h-8 w-8 flex-shrink-0" src="https://img.icons8.com/dusk/64/000000/paper-plane.png" alt=""></img>
                  <div class="px-6 py-4" >
                      <h3 class="text-lg font-bold text-gray-800" >900</h3>
                      <p class="text-gray-600 text-sm">  FORWARDS</p>
                  </div>
          </div>  
    </div>
    </div>
        </div>

  
      </body >

    
   
  );
}

export default Home;

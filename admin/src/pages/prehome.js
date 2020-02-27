/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";


const PreHome = () => (
    
<body><nav class="font-sans bg-white text-center flex justify-between items-center my-4 mx-auto container overflow-hidden">
<Link to="/register">
  <button class="bg-transparent text-sm hover:text-gray-700 text-gray-900 py-2 px-3">
  Registrarse
  </button>
  </Link>

  <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
    <li class="font-c font-semibold text-2xl"><a href="/">
    PACHALOVE
      </a></li>

  </ul>
  <Link to="/login">
  <button class="text-sm bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
    Ingresar
  </button>
  </Link>

</nav>
<section class="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center bg-image-2">
  <div class="bg-white text-black rounded-full h-16 w-16 flex items-center justify-center mb-8"><i
      class="fas fa-play ml-1"></i></div>
  <label for="" class="uppercase tracking-extrawide text-white text-xs font-hairline mt-8">Watch Video</label>
  <h3 class="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal">Differentiate Yourself And Attract
    More Attention Sales And Profits</h3>
</section><footer class="font-sans bg-black text-white py-8 px-4">
  <div class="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
    <a href="/" class="block mr-4 w-1/2">
      <img src="https://stitches.hyperyolo.com/images/logo-white.png" class="w-32" alt="logo"/>
    </a>
    <div class="w-1/2 flex text-sm mt-6 lg:mt-0">
     
      <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
        <li class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Info</li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Support</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Developers</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Customer
            Services</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Started Guide</a>
        </li>
      </ul>
      <div class="text-gray-700 flex flex-col">
        <div class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
        <div class="flex pl-4 justify-start">
          <a class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline" href="#"><i
              class="fab fa-github-alt"></i></a>
          <a class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline" href="#"><i
              class="fab fa-slack"></i></a>
          <a class="block flex items-center text-white hover:text-gray-500 no-underline" href="#"><i
              class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center"> ©2020 PES</div>
</footer>
</body>


    
)

export default PreHome;
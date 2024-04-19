import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { DarkThemeToggle, Flowbite, Button } from "flowbite-react";
import { CookieBanner } from './components/CookieBanner';
import Nav from "./components/Navbar.jsx";

import "./data/data.jsx"
import { mainData } from './data/data.jsx';

import CardRender from "./components/Cards.jsx";

function App() {

  const sortedData = mainData.slice().sort((a, b) => a.abbr.localeCompare(b.abbr));


  return (
    <Flowbite>
      <Nav/>

        
    <div className='font-6xl font-black mt-32'>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sortedData.map((item, index) => (
          <CardRender key={index} cardData={item} />
        ))}
      </div>

      <CookieBanner/>

    </div>
    </Flowbite>
  )
}

export default App

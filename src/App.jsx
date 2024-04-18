import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { DarkThemeToggle, Flowbite, Button } from "flowbite-react";
import { CookieBanner } from './components/CookieBanner';
import Nav from "./components/Navbar.jsx";

import "./data/data.jsx"
import { mainData } from './data/data.jsx';

function App() {


  return (
    <Flowbite>
      <Nav/>

        
    <div className='font-6xl font-black mt-32'>
    <Button>Click me</Button>;

      just some filler text
      {mainData[0].abbr}
      <CookieBanner/>
      <DarkThemeToggle />
    </div>
    </Flowbite>
  )
}

export default App

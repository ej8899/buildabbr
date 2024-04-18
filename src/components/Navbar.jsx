"use client";

import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle,  } from "flowbite-react";

export default function Component() {
  return (
<Navbar fluid rounded className='fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-75 bg-gray-300 dark:bg-gray-800 dark:bg-opacity-75 z-40'>
      {/* Left-justified content */}
      <div className="flex items-center w-auto justify-between z-50">
        <Navbar.Brand href="https://erniejohnson.ca/apps/companyquiz">
          <img src="./favicon-32x32.png" className="mr-3 h-6 sm:h-9" alt="BuildAbbr Logo" />
          <span className="self-center whitespace-nowrap text-xl font-extrabold font-sans dark:text-white tracking-tight">BuildAbbr!</span>
        </Navbar.Brand>
      </div>

      {/* Right-justified content */}
      <div className="flex items-center">
       

 

        <DarkThemeToggle />
      </div>

    
    </Navbar>
  );
}

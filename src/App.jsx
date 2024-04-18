import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="bg-blue-700 p-4">
      <h1 className="text-6xl font-bold  underline">Hello from Tailwind CSS (blue bg/underline)!</h1>
    </div>
    </>
  )
}

export default App

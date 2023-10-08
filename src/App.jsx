import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//main components
// =================================

// header component
import Header from './components/Header'
// main component
import Main from './components/Main'
// footer component


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Main />
    </>
  )
}

export default App

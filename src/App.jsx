import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
    <Routes>
    <Route path='/' element={<Login></Login>}>
    </Route>
   </Routes>
    </>
  )
}

export default App

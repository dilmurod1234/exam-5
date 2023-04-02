import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from "./components/Register"
import Login from "./components/Login"
import Clients from './components/Clients'
import Suppliers from "./components/Suppliers"

import "./Assets/main.css"

export default function App() {
  return (
    <div className='container-fluid p-0'>
      <Routes> 
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/suppliers' element={<Suppliers/>}/>
      </Routes>
    </div>
  )
}

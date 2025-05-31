import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreatePage from './Pages/CreatePage'
import Navbar from './Components/navbar'
import './index.css'

const App = () => {
  return (
    
      <div>

      <Navbar/>

      <div className='flex items-center justify-center h-screen'>
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreatePage/>}/>
            
          </Routes>
      </div>

    </div>
  )
}

export default App


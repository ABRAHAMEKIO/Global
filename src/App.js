import React from 'react'
import Home from './Pages/Home'
import ConnectWallet from './Pages/ConnectWallet'
import Create from './Pages/Create'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Connectwallet' element={<ConnectWallet/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
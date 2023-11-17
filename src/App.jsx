import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='my-account' element={<MyAccount />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

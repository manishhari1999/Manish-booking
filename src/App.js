import React from 'react'
import Booking from "./components/Booking"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StoreList from './components/StoreList'

const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Booking />} />
      <Route path='/storelist' element={<StoreList />} />
      
    </Routes>
     
    </BrowserRouter> 
  )
}

export default App
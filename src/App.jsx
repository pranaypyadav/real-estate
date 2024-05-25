import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

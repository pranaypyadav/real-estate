import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './Pages/About'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/about' element={< About />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

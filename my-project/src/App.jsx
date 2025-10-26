// import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Layout from './Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Photo from './components/Photos/Photo'
import Login from './components/Login/Login'
import CurrencyFX from './components/Currency/CurrencyFX'
import Todo from './components/Todo/Todo'
import Games from "./components/Game/Tenzies"
import Errorpage from './components/Errorpage/Errorpage'
import Tenzies from './components/Game/Tenzies'



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="photo" element={<Photo />} />
        <Route path="login" element={<Login />} />
        <Route path="currency" element={<CurrencyFX />} />
        <Route path="todo" element={<Todo />} />
        <Route path="tenzies" element={<Tenzies />} />
        <Route path="*" element={<Errorpage />} />

      </Route>
    )
  )

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App

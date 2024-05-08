import React, { useState } from 'react'
import "./app.scss"
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Parallax from './Components/Parralax/parallax'
import Services from './Components/Services/services'


const App = () => {

  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>

      <section id='Services'><Parallax type={"services"} /></section>

      <section><Services /></section>

      <section id='Portfolio'><Parallax type={"portfolio"} /></section>

      <section id='Contact'></section>
     
    </div>
  )
}




export default App

// <section><Navbar /></section>
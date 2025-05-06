import { useState } from 'react'
import './App.css'

import Story from './components/Story.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Story />
      <Footer />
    </>
  )
}

export default App

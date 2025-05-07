import { useState } from 'react'
import './App.css'


import { BrowserRouter, Routes, Route} from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'

import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'

import StoryPage from './pages/StoryPage.jsx'

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>

            <Route index element={<Home />} />
            <Route path='/' element={<Layout />}>
              <Route path="story" element={<StoryPage />} />
            </Route> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
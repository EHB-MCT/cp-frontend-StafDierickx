import { useState } from 'react'
import './App.css'


import { BrowserRouter, Routes, Route} from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import BannerProvider from './context/BannerContext.jsx'

import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'

import StoryPage from './pages/StoryPage.jsx'

function App() {
  return (
    <>
      <ThemeProvider>
        <BannerProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="story" element={<StoryPage />} />
              </Route> 
            </Routes>
          </BrowserRouter>
        </BannerProvider>
      </ThemeProvider>
    </>
  )
}

export default App
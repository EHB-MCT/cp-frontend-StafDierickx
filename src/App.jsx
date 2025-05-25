import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router'
import { ThemeProvider } from './context/ThemeContext.jsx'
import BannerProvider from './context/BannerContext.jsx'

import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Sprookjes from './pages/Sprookjes.jsx'
import StoryFrame from './pages/StoryFrame.jsx'
import ParalaxPage from './pages/Paralax.jsx'
import MakingOf from './pages/MakingOf.jsx'

function App() {
  return (
    <>
      <ThemeProvider>
        <BannerProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sprookjes" element={<Sprookjes />} />
                <Route path="story" element={<StoryFrame />} />
                <Route path="making-of" element={<MakingOf />} />
              </Route> 
              <Route path="paralax" element={<ParalaxPage />} />
            </Routes>
          </BrowserRouter>
        </BannerProvider>
      </ThemeProvider>
    </>
  )
}

export default App
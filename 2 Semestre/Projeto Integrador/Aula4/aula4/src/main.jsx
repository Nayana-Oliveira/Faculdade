import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './Home.jsx'
import SobreMim from './SobreMim.jsx'
import Hobby from './Hobby.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='/hobby' element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

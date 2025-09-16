import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './pages/home'
import Erro from './pages/erro'
import Exercicios from './pages/Exercicios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Erro />}/>
        <Route path='/exercicios' element={<Exercicios />}/>
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)

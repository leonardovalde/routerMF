import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Characters from './pages/Characters'
import NotFound from './pages/NotFound'
import { getCharacter } from './api/Characters'
import CharacterDetailComponent from './components/CharacterDetailComponent'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Characters" element={<Characters />} />
      <Route path="/about" element={<About />} />
      <Route path="/:characterId" Component={CharacterDetailComponent} />
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route Component={NotFound} /> */}
    </Routes>
  </BrowserRouter>
)


const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)

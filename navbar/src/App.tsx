import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"

import './index.css'
import NavBarComponent from './components/NavBarComponent'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBarComponent />
      <div>Content</div>
    </Container>
  </BrowserRouter>
)
// const rootElement = document.getElementById('app')
// if (!rootElement) throw new Error('Failed to find the root element')

// const root = ReactDOM.createRoot(rootElement as HTMLElement)

// root.render(<App />)
ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(<App />)

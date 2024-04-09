import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Counter from './components/Counter'

const App = () => (
  <div className="container">
    <Counter />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)

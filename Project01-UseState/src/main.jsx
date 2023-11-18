import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Cards'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card username='Name 1' btnText='Click (1)'/>
    <App />
    <Card username='Name 2' btnText='Click (2)'/>
  </React.StrictMode>,
)

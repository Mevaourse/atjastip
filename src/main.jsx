import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Landingpage.jsx'
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

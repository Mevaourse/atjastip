import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landingpage from './pages/Landingpage.jsx';
import Nav from './components/Navbar.jsx';
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode className="overflow-y-hidden">
    <Nav />
    <Landingpage />
  </StrictMode>,
)

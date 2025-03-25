import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import SmoothScrolling from './components/SmoothScrolling.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SmoothScrolling>
  </StrictMode>,
)

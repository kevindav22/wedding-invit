import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageTemplate from './pages/PageTemplate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageTemplate />
  </StrictMode>,
)

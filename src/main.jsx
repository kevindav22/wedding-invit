import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import PageTemplate from './pages/PageTemplate.jsx';
import PageGenerate from './pages/PageGenerate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTemplate />} />
        <Route path="/invitation-generator" element={<PageGenerate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomColorGenerator from './components/randomColorGenerator/index.jsx';
import Accordion from './components/accordion/index.jsx';
import StarRatingSystem from './components/Star Rating system/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/random-color-generator" element={<RandomColorGenerator />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/star-rating-system" element={<StarRatingSystem />} />
      </Routes>
    </Router>  
  </StrictMode>,
)

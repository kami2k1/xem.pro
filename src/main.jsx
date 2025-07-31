import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/the-thao" element={<CategoryPage category="sports" />} />
      <Route path="/phim-dien-anh" element={<CategoryPage category="movies" />} />
      <Route path="/anime" element={<CategoryPage category="anime" />} />
      <Route path="/truyen-hinh" element={<CategoryPage category="tv" />} />
      <Route path="/18-plus" element={<CategoryPage category="adult" />} />
      <Route path="/manga" element={<CategoryPage category="comics" />} />
    </Routes>
  </Router>
)

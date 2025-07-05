import React from 'react'
import { Routes, Route } from 'react-router'
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'
import Create from './pages/Create'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='forest'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
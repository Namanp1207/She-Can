import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.jsx'

const App = () => {

  const url = "https://she-can-backend-ol9b.onrender.com"

  return (
    <div className='app'>
      <Routes>  
        <Route path='/admin' element={<Dashboard url={url} />} />
      </Routes>
    </div>
  )
}

export default App


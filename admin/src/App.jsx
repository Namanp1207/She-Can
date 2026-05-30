import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'

const App = () => {

  const url = "http://localhost:4000"

  return (
    <div className='app'>
      <Routes>  
        <Route path='/admin' element={<Dashboard url={url} />} />
      </Routes>
    </div>
  )
}

export default App


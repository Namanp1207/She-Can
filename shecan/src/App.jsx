import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  )
}

export default App

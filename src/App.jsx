import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Success } from './components'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/success' element={<Success />} />
      <Route path='/*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

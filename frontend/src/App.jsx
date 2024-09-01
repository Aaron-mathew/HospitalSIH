import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from './components/UserHome'
import BookAppointmentPage from './components/BookAppointmentPage'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/BookAppointment" element={<BookAppointmentPage />} /> 
      </Routes>
    </div>
  )
}

export default App
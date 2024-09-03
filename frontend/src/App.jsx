import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from './components/UserHome'
import BookAppointmentPage from './components/BookAppointmentPage'
import AppointmentStatus from './components/AppointmentStatus'
import AllAppointmentsOfUserPage from './components/AllAppointmentsOfUserPage'
import DeleteAppointmentUserPage from './components/DeleteAppointmemtUserPage'
import ManagementHome from './components/ManagementHome'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/BookAppointment" element={<BookAppointmentPage />} /> 
        <Route path="/AllAppointmentsOfUserPage" element={<AllAppointmentsOfUserPage />} />    
        <Route path="/AppointmentStatus" element={<AppointmentStatus />} />      
        <Route path="/DeleteAppointment" element={<DeleteAppointmentUserPage />} />
        <Route path="/ManagementHome" element={<ManagementHome />} />

      </Routes>
    </div>
  )
}

export default App
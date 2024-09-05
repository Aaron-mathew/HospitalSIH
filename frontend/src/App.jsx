import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from './components/UserHome'
import BookAppointmentPage from './components/BookAppointmentPage'
import AppointmentStatus from './components/AppointmentStatus'
import AllAppointmentsOfUserPage from './components/AllAppointmentsOfUserPage'
import DeleteAppointmentUserPage from './components/DeleteAppointmemtUserPage'
import ManagementHome from './components/ManagementHome'
import ManagementCurrentAppointment from './components/ManagementCurrentAppointment'
import ManagementAddAppointment from './components/ManagementAddAppointment'
import ManagementDeleteAppointment from './components/ManagementDeleteAppointment'
import NewManagementAppointments from './components/NewManagementAppointments'
import BedManagement from './components/BedManagement'
import InventoryManagement from './components/InventoryManagement'
import AllHospitalsForAppointment from './components/AllHospitalsForAppointment'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/AllHospitalsForAppointment" element={<AllHospitalsForAppointment />} />
        <Route path="/BookAppointment" element={<BookAppointmentPage />} /> 
        <Route path="/AllAppointmentsOfUserPage" element={<AllAppointmentsOfUserPage />} />    
        <Route path="/AppointmentStatus" element={<AppointmentStatus />} />      
        <Route path="/DeleteAppointment" element={<DeleteAppointmentUserPage />} />
        <Route path="/ManagementHome" element={<ManagementHome />} />
        <Route path="/ManagementCurrentAppointment" element={<ManagementCurrentAppointment />} />
        <Route path="/ManagementAddAppointment" element={<ManagementAddAppointment />} />
        <Route path="/ManagementDeleteAppointment" element={<ManagementDeleteAppointment />} />
        <Route path="/NewManagementAppointments" element={<NewManagementAppointments />} />
        <Route path="/BedManagement" element={<BedManagement />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
      
      </Routes>
    </div>
  )
}

export default App
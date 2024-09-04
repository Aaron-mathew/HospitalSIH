import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import ManagementSidenav from './partials/ManagementSidenav';
import ManagementTopnav from './partials/ManagementTopnav';

const ManagementCurrentAppointment = () => {
    document.title = "Healio | Management_Homepage";
    
    const appointments = [
        { id: 1, doctorName: "Dr. Smith", date: "2024-09-10", time: "10:00 AM" },
        { id: 2, doctorName: "Dr. Johnson", date: "2024-09-11", time: "11:00 AM" },
        { id: 3, doctorName: "Dr. Williams", date: "2024-09-12", time: "02:00 PM" },
        { id: 4, doctorName: "Dr. Brown", date: "2024-09-13", time: "09:00 AM" },
        { id: 5, doctorName: "Dr. Taylor", date: "2024-09-14", time: "03:00 PM" },
        { id: 6, doctorName: "Dr. Davis", date: "2024-09-15", time: "01:00 PM" },
        { id: 7, doctorName: "Dr. Wilson", date: "2024-09-16", time: "12:00 PM" },
        { id: 8, doctorName: "Dr. Martinez", date: "2024-09-17", time: "11:30 AM" },
        { id: 9, doctorName: "Dr. Garcia", date: "2024-09-18", time: "10:30 AM" },
        { id: 10, doctorName: "Dr. Anderson", date: "2024-09-19", time: "02:30 PM" },
    ];

    return (
        <div className='flex'>
            <ManagementSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-300'>
                <ManagementTopnav />
                <div className='flex-grow flex flex-col items-center p-8'>
                    <div className='w-full max-w-3xl h-[620px] overflow-y-auto overflow-x-hidden custom-scrollbar'>
                        {appointments.map((appointment, index) => (
                            <Link 
                                to="/BedManagement" 
                                key={index} 
                                className='block bg-[#4AB88B] p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:bg-[#3a946c] mb-4'
                            >
                                <div>
                                    <p className='text-lg font-bold text-white'>Doctor: {appointment.doctorName}</p>
                                    <p className='text-lg text-white'>Date: {appointment.date}</p>
                                    <p className='text-lg text-white'>Time: {appointment.time}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagementCurrentAppointment;

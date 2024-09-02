import React from 'react';
import { Link } from 'react-router-dom';
import UserSidenav from './partials/UserSidenav';

const AllAppointmentsOfUserPage = () => {
    document.title = "Healio | User_Homepage";

    const appointments = [
        { hospitalName: "Hospital A", doctorName: "Dr. Smith" },
        { hospitalName: "Hospital B", doctorName: "Dr. Johnson" },
        { hospitalName: "Hospital C", doctorName: "Dr. Williams" },
    ];

    return (
        <div className='flex'>
            <UserSidenav />
            <div className='w-[80%] h-screen flex flex-col items-center justify-center space-y-12 p-8'>
                {appointments.map((appointment, index) => (
                    <Link 
                        to="/AppointmentStatus" 
                        key={index} 
                        className='w-full max-w-3xl bg-[#6656cdab] p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:bg-[#6556CD]'
                    >
                        <div>
                            <h3 className='text-2xl font-bold'>{appointment.hospitalName}</h3>
                            <p className='text-xl mt-2'>{appointment.doctorName}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllAppointmentsOfUserPage;

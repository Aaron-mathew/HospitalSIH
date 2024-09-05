import React, { useState } from 'react';
import UserSidenav from './partials/UserSidenav';
import UserTopnav from './partials/UserTopnav';

const DeleteAppointmentUserPage = () => {
    document.title = "Healio | User_Homepage";
    const [appointments, setAppointments] = useState([
        { id: 1, hospitalName: "Hospital A", doctorName: "Dr. Smith" },
        { id: 2, hospitalName: "Hospital B", doctorName: "Dr. Johnson" },
        { id: 3, hospitalName: "Hospital C", doctorName: "Dr. Williams" },
    ]);

    const handleDelete = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    return (
        <div className='flex'>
            <UserSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-300'>
                <UserTopnav />
                <div className='flex-grow flex flex-col items-center justify-center space-y-12 p-8'>
                    {appointments.map(appointment => (
                        <div key={appointment.id} className='w-full max-w-3xl bg-[#4AB88B] p-8 rounded-xl shadow-lg flex justify-between items-center transform transition duration-500 hover:scale-105 hover:bg-[#3a946c]'>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>{appointment.hospitalName}</h3>
                                <p className='text-xl mt-2 text-white'>{appointment.doctorName}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(appointment.id)}
                                className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
                            >
                                Cancel
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeleteAppointmentUserPage;

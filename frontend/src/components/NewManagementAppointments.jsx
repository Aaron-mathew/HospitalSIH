import React, { useState } from 'react';
import ManagementSidenav from './partials/ManagementSidenav';
import ManagementTopnav from './partials/ManagementTopnav';

const NewManagementAppointments = () => {
    document.title = "Healio | New Management Appointments";

    const [appointments, setAppointments] = useState([
        { id: 1, doctorName: "Dr. Smith", date: "2024-09-10", time: "10:00 AM", accepted: false },
        { id: 2, doctorName: "Dr. Johnson", date: "2024-09-11", time: "11:00 AM", accepted: false },
        { id: 3, doctorName: "Dr. Williams", date: "2024-09-12", time: "02:00 PM", accepted: false },
    ]);

    const handleAccept = (id) => {
        setAppointments(appointments.map(appointment => 
            appointment.id === id ? { ...appointment, accepted: true } : appointment
        ));
    };

    const handleCancel = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    const handlePriorityToggle = (id) => {
        setAppointments(appointments.map(appointment => 
            appointment.id === id ? { ...appointment, priority: !appointment.priority } : appointment
        ));
    };

    return (
        <div className='flex'>
            <ManagementSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-300'>
                <ManagementTopnav />
                <div className='flex-grow flex flex-col items-center p-8'>
                    <div className='w-full max-w-3xl h-[620px] overflow-y-auto overflow-x-hidden custom-scrollbar'>
                        {appointments.map((appointment) => (
                            <div key={appointment.id} className='block bg-[#4AB88B] p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:bg-[#3a946c] mb-4 flex justify-between items-center'>
                                <div>
                                    <p className='text-lg font-bold text-white'>Doctor: {appointment.doctorName}</p>
                                    <p className='text-lg text-white'>Date: {appointment.date}</p>
                                    <p className='text-lg text-white'>Time: {appointment.time}</p>
                                    {appointment.accepted && (
                                        <div className='flex items-center mt-2'>
                                            <label className='text-white mr-2'>Priority:</label>
                                            <input 
                                                type="checkbox" 
                                                checked={appointment.priority || false} 
                                                onChange={() => handlePriorityToggle(appointment.id)} 
                                                className='w-6 h-6' // Adjust size here
                                            />
                                        </div>
                                    )}
                                </div>
                                {!appointment.accepted ? (
                                    <div>
                                        <button 
                                            onClick={() => handleAccept(appointment.id)}
                                            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2'
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleCancel(appointment.id)}
                                            className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <p className='text-green-700'>Accepted</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewManagementAppointments;

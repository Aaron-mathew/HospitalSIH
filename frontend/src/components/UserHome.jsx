import React, { useState, useEffect } from 'react';
import UserSidenav from './partials/UserSidenav';
import UserTopnav from './partials/UserTopnav';
import '../index.css'; // Importing custom CSS for animations

const UserHome = () => {
    const [showAppointment, setShowAppointment] = useState(false);

    useEffect(() => {
        // Initial timeout to show the appointment after 3 seconds
        const toggleDisplay = () => {
            setShowAppointment(prevState => !prevState);
        };

        const timer = setInterval(() => {
            toggleDisplay();
        }, 4000); // Toggle every 5 seconds

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, []);

    document.title = "Healio | User_Homepage";

    return (
        <div className='flex'>
            <UserSidenav />
            <div className='w-[80%] h-[100vh] flex flex-col bg-zinc-200'>
                <UserTopnav />
                <div className={`flex-grow flex items-center justify-center ${showAppointment ? 'slide-out' : ''}`}>
                    {!showAppointment && (
                        <>
                            <h1 className='text-[#4AB88B] text-5xl font-bold slide-in'>
                                What Would You Like to do?
                            </h1>
                            <img src="./Doctor.png" alt="Doctor" className='slide-in-image' />
                        </>
                    )}
                    {showAppointment && (
                        <div className="appointment-status">
                            <h2 className='text-[#4AB88B] text-3xl font-semibold mb-4'>Upcoming Appointment</h2>
                            <p className='text-zinc-700 text-xl'>Dr. John Doe - September 8, 2024, 10:30 AM</p>
                            <p className='text-zinc-700 text-lg'>Location: Healio Clinic</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserHome;

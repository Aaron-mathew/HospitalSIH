import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserSidenav from './partials/UserSidenav';
import UserTopnav from './partials/UserTopnav';

// Example hospitals data
const hospitalsData = [
    { id: 1, name: 'Healio Hospital', patientsWaiting: 12, availableBeds: 5, location: '40.748817, -73.985428' },
    { id: 2, name: 'City Care Clinic', patientsWaiting: 7, availableBeds: 3, location: '40.730610, -73.935242' },
    { id: 3, name: 'Medicare Hospital', patientsWaiting: 15, availableBeds: 8, location: '40.712776, -74.005974' },
    { id: 4, name: 'HealthyLife Center', patientsWaiting: 4, availableBeds: 10, location: '40.789142, -73.134960' },
    { id: 5, name: 'Sunshine Medical', patientsWaiting: 10, availableBeds: 6, location: '40.780902, -73.977502' },
    { id: 6, name: 'Central Health', patientsWaiting: 9, availableBeds: 7, location: '40.764356, -73.923461' },
    { id: 7, name: 'Evergreen Hospital', patientsWaiting: 14, availableBeds: 4, location: '40.735657, -73.990642' },
    { id: 8, name: 'Prime Care Hospital', patientsWaiting: 6, availableBeds: 9, location: '40.746673, -73.987409' },
    { id: 9, name: 'Green Valley Clinic', patientsWaiting: 8, availableBeds: 3, location: '40.726476, -74.006358' },
    { id: 10, name: 'Hope Medical', patientsWaiting: 5, availableBeds: 12, location: '40.768517, -73.963017' },
];

const AllHospitalsForAppointment = () => {
    document.title = "Healio | User_Homepage";
    const [selectedHospital, setSelectedHospital] = useState(null);

    const handleHospitalClick = (hospital) => {
        setSelectedHospital(hospital);
    };

    // Find the hospital with the lowest patient waiting time
    const lowestWaitingHospital = hospitalsData.reduce((prev, curr) => 
        (prev.patientsWaiting < curr.patientsWaiting) ? prev : curr
    );

    return (
        <div className='flex'>
            <UserSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-200'>
                <UserTopnav />
                <div className='flex flex-grow p-8'>
                    {/* Hospital List */}
                    <div className='w-[60%] h-[620px] overflow-y-auto overflow-x-hidden custom-scrollbar'>
                        <h2 className='text-2xl font-bold mb-4 text-[#4AB88B]'>Available Hospitals for Appointments</h2>
                        <ul className='space-y-4'>
                            {hospitalsData.map(hospital => (
                                <li
                                    key={hospital.id}
                                    className={`bg-white p-4 rounded-lg shadow-lg flex justify-between items-center hover:bg-[#4AB88B] hover:text-white cursor-pointer ${hospital.id === lowestWaitingHospital.id ? 'border-4 border-[#4AB88B] relative' : ''}`}
                                    onClick={() => handleHospitalClick(hospital)}
                                >
                                    <div>
                                        <h3 className='text-xl font-semibold'>{hospital.name}</h3>
                                        <p>Patients waiting: {hospital.patientsWaiting}</p>
                                        <p>Available beds: {hospital.availableBeds}</p>
                                    </div>
                                    <Link
                                        to={`/BookAppointment`}
                                        className='bg-white text-[#4AB88B] py-2 px-4 rounded-lg shadow-md hover:bg-[#4AB88B] hover:text-white duration-300'
                                    >
                                        Book Appointment
                                    </Link>

                                    {hospital.id === lowestWaitingHospital.id && (
                                        <img
                                            src="./lowest_wait-time.png" // Replace with your actual image URL
                                            alt="Highlight"
                                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2'
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className='w-[40%] ml-8'>
                        <h2 className='text-2xl font-bold mb-4 text-[#4AB88B]'>Hospitals Near You</h2>
                        <div className='h-[400px] w-full bg-gray-300 rounded-lg shadow-lg'>
                            <iframe
                                title='Nearby Hospitals'
                                width='100%'
                                height='100%'
                                frameBorder='0'
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.7835400849835!2d77.52326421719201!3d23.250962676581068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2sLNCT%20Group%20of%20Colleges!5e0!3m2!1sen!2sin!4v1670692886076!5m2!1sen!2sin`}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllHospitalsForAppointment;

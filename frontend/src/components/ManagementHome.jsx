import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import ManagementSidenav from './partials/ManagementSidenav';
import ManagementTopnav from './partials/ManagementTopnav';
import 'chart.js/auto';

const ManagementHome = () => {
    document.title = "Healio | Management_Homepage";

    // Data for Appointments Over Time graph
    const appointmentData = {
        labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
        datasets: [
            {
                label: 'Appointment Percentage',
                data: [20, 30, 45, 60, 70, 80, 85, 90, 100],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
        ],
    };

    const appointmentOptions = {
        responsive: true,
        // maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeOutBounce',
        },
    };

    // Data for Bed Availability graph
    const bedData = {
        labels: ['General', 'ICU', 'Emergency', 'Maternity', 'Pediatrics'],
        datasets: [
            {
                label: 'Available Beds',
                data: [50, 20, 5, 10, 15],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const bedOptions = {
        responsive: true,
        // maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeOutExpo',
        },
    };

    // Data for Patient Admission Status graph
    const patientAdmissionData = {
        labels: ['General', 'ICU', 'Emergency', 'Maternity', 'Pediatrics'],
        datasets: [
            {
                label: 'Admissions Today',
                data: [30, 10, 20, 5, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const patientAdmissionOptions = {
        responsive: true,
        // maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
        },
    };

    // Data for Inventory Management table
    const inventoryItems = [
        { name: 'Paracetamol', quantity: 150, status: 'In Stock' },
        { name: 'Amoxicillin', quantity: 100, status: 'Low Stock' },
        { name: 'Syringes', quantity: 50, status: 'In Stock' },
        { name: 'IV Drip', quantity: 30, status: 'Out of Stock' },
    ];

    return (
        <div className='flex overflow-hidden'>
            <ManagementSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-200'>
                <ManagementTopnav />
                <div className='flex-grow p-6 overflow-hidden'>
                    <h1 className='text-2xl font-semibold text-gray-700 mb-4'>Management Dashboard</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full'>
                        {/* Appointments Over Time Graph */}
                        <div className='bg-white shadow-md rounded-lg p-4 h-full'>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Appointments Over Time</h2>
                            <div className='h-[80%]'>
                                <Line data={appointmentData} options={appointmentOptions} />
                            </div>
                        </div>

                        {/* Bed Availability Graph */}
                        <div className='bg-white shadow-md rounded-lg p-4 h-full'>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Bed Availability</h2>
                            <div className='h-[80%]'>
                                <Bar data={bedData} options={bedOptions} />
                            </div>
                        </div>

                        {/* Patient Admission Status */}
                        <div className='bg-white shadow-md rounded-lg p-4 h-full'>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Patient Admission Status</h2>
                            <div className='h-[80%]'>
                                <Pie data={patientAdmissionData} options={patientAdmissionOptions} />
                            </div>
                        </div>

                        {/* Medicines Sold Today Table */}
                        <div className='bg-white shadow-md rounded-lg p-4 col-span-2 h-full'>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Medicines Sold Today</h2>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr>
                                        <th className='py-2 px-4 border-b'>Medicine</th>
                                        <th className='py-2 px-4 border-b'>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-2 px-4 border-b'>Paracetamol</td>
                                        <td className='py-2 px-4 border-b'>150</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 px-4 border-b'>Amoxicillin</td>
                                        <td className='py-2 px-4 border-b'>100</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 px-4 border-b'>Ibuprofen</td>
                                        <td className='py-2 px-4 border-b'>80</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Inventory Management Table */}
                        <div className='bg-white shadow-md rounded-lg p-4 h-full'>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>Inventory Management</h2>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr>
                                        <th className='py-2 px-4 border-b'>Item</th>
                                        <th className='py-2 px-4 border-b'>Quantity</th>
                                        <th className='py-2 px-4 border-b'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventoryItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className='py-2 px-4 border-b'>{item.name}</td>
                                            <td className='py-2 px-4 border-b'>{item.quantity}</td>
                                            <td className='py-2 px-4 border-b'>{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagementHome;

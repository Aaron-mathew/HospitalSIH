import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserSidenav from './partials/UserSidenav';

const AppointmentStatus = () => {
    document.title = "Healio | Appointment Status";

    const [position, setPosition] = useState(3);
    const [approxTime, setApproxTime] = useState('15 minutes');

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => (prev > 1 ? prev - 1 : 1));
            setApproxTime(prev => (prev !== '5 minutes' ? `${parseInt(prev) - 5} minutes` : '5 minutes'));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex">
            <UserSidenav />
            <div className="w-[80%] h-screen flex items-center justify-center bg-gradient-to-r from-[#4AB88B] to-[#596F93]">
                <div className="text-center">
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-6xl font-bold mb-8"
                    >
                        Appointment Status
                    </motion.h1>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white p-8 rounded-lg shadow-xl"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Your Position in Queue
                        </h2>
                        <motion.p
                            initial={{ fontSize: '3rem' }}
                            animate={{ fontSize: '5rem' }}
                            transition={{ duration: 1 }}
                            className="text-5xl font-bold text-[#596F93] mb-4"
                        >
                            {position}
                        </motion.p>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Approximate Wait Time
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-4xl font-bold text-[#4AB88B]"
                        >
                            {approxTime}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentStatus;

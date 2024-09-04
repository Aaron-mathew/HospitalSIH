import React, { useState } from 'react';
import ManagementSidenav from './partials/ManagementSidenav';
import ManagementTopnav from './partials/ManagementTopnav';

const InventoryManagement = () => {
    document.title = "Healio | Inventory Management";

    // Initial state for medicines
    const [medicines, setMedicines] = useState([
        { id: 1, name: "Paracetamol", quantity: 20, outOfStock: false, avgDailyUsage: 5 },
        { id: 2, name: "Ibuprofen", quantity: 0, outOfStock: true, avgDailyUsage: 3 },
        { id: 3, name: "Amoxicillin", quantity: 15, outOfStock: false, avgDailyUsage: 4 },
        { id: 4, name: "Ciprofloxacin", quantity: 5, outOfStock: false, avgDailyUsage: 2 },
    ]);

    const [newMedicine, setNewMedicine] = useState({ name: '', quantity: 0, avgDailyUsage: 0 });

    const handleAddMedicine = () => {
        if (newMedicine.name && newMedicine.quantity > 0) {
            const newId = medicines.length ? medicines[medicines.length - 1].id + 1 : 1;
            setMedicines([...medicines, { ...newMedicine, id: newId, outOfStock: newMedicine.quantity === 0 }]);
            setNewMedicine({ name: '', quantity: 0, avgDailyUsage: 0 });
        }
    };

    const handleQuantityChange = (id, quantity) => {
        setMedicines(medicines.map(medicine => 
            medicine.id === id ? { ...medicine, quantity, outOfStock: quantity === 0 } : medicine
        ));
    };

    // Calculate the approximate amount needed based on daily usage
    const calculateNeeded = (medicine) => {
        if (medicine.outOfStock) {
            return "Out of Stock";
        }
        const daysLeft = Math.ceil(medicine.quantity / medicine.avgDailyUsage);
        const approxNeeded = medicine.avgDailyUsage * 7; // Estimate for a week
        return `Approx. Needed: ${approxNeeded} (for 7 days)`;
    };

    return (
        <div className='flex'>
            <ManagementSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-300'>
                <ManagementTopnav />
                <div className='flex-grow p-8'>
                    <h2 className='text-xl font-bold mb-4'>Medicine Inventory Management</h2>

                    <div className='mb-6'>
                        <h3 className='text-lg font-semibold'>Add New Medicine</h3>
                        <input 
                            type="text" 
                            placeholder="Medicine Name" 
                            value={newMedicine.name} 
                            onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                            className='border rounded p-2 mr-2'
                        />
                        <input 
                            type="number" 
                            placeholder="Quantity" 
                            value={newMedicine.quantity} 
                            onChange={(e) => setNewMedicine({ ...newMedicine, quantity: parseInt(e.target.value) || 0 })}
                            className='border rounded p-2 mr-2'
                        />
                        <input 
                            type="number" 
                            placeholder="Average Daily Usage" 
                            value={newMedicine.avgDailyUsage} 
                            onChange={(e) => setNewMedicine({ ...newMedicine, avgDailyUsage: parseInt(e.target.value) || 0 })}
                            className='border rounded p-2 mr-2'
                        />
                        <button 
                            onClick={handleAddMedicine} 
                            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                        >
                            Add
                        </button>
                    </div>

                    <div className='overflow-y-auto h-[500px]'>
                        {medicines.map((medicine) => (
                            <div key={medicine.id} className='flex justify-between items-center bg-[#4AB88B] p-4 mb-2 rounded-lg shadow-lg'>
                                <div>
                                    <p className='text-lg font-bold text-white'>{medicine.name}</p>
                                    <p className={`text-lg ${medicine.outOfStock ? 'text-red-500' : 'text-white'}`}>
                                        {medicine.outOfStock ? 'Out of Stock' : `Quantity: ${medicine.quantity}`}
                                    </p>
                                    <p className='text-lg text-white'>{calculateNeeded(medicine)}</p>
                                </div>
                                <input 
                                    type="number" 
                                    value={medicine.quantity} 
                                    onChange={(e) => handleQuantityChange(medicine.id, parseInt(e.target.value) || 0)} 
                                    className='w-24 text-center border rounded' 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryManagement;

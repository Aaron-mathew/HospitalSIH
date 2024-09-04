import React, { useState } from 'react';
import ManagementSidenav from './partials/ManagementSidenav';
import ManagementTopnav from './partials/ManagementTopnav';

const BedManagement = () => {
    document.title = "Healio | Bed Management";

    // Define the number of beds for each category
    const bedCounts = {
        General: 17,
        ICU: 10,
        Emergency: 15,
        Maternity: 12,
        Pediatrics: 18,
    };

    // State to track the current category and beds
    const [category, setCategory] = useState('General');
    const [beds, setBeds] = useState(createBeds(bedCounts[category]));

    // Function to create beds based on count
    function createBeds(count) {
        return Array(count).fill().map((_, index) => ({
            id: index + 1,
            patientName: '',
            checked: false,
        }));
    }

    const handleBedToggle = (id) => {
        setBeds(beds.map(bed => 
            bed.id === id ? { ...bed, checked: !bed.checked } : bed
        ));
    };

    const handleNameChange = (id, name) => {
        setBeds(beds.map(bed => 
            bed.id === id ? { ...bed, patientName: name } : bed
        ));
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        setBeds(createBeds(bedCounts[selectedCategory]));
    };

    // Calculate available beds
    const availableBeds = beds.filter(bed => !bed.checked).length;

    return (
        <div className='flex'>
            <ManagementSidenav />
            <div className='w-[80%] h-screen flex flex-col bg-zinc-300'>
                <ManagementTopnav />
                <div className='flex-grow p-8'>
                    <h2 className='text-xl font-bold mb-4'>Bed Management</h2>
                    
                    {/* Dropdown for selecting category */}
                    <div className='mb-4'>
                        <label className='mr-2 text-lg'>Select Category:</label>
                        <select 
                            value={category} 
                            onChange={handleCategoryChange} 
                            className='border rounded p-2 bg-white'
                        >
                            {Object.keys(bedCounts).map((key) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                    </div>

                    {/* Circle showing available beds */}
                    <div className='flex items-center justify-center mb-4'>
                        <div className='relative w-32 h-32 border-4 border-[#4AB88B] rounded-full flex items-center justify-center bg-white'>
                            <span className='text-lg font-bold'>
                                {availableBeds}/{bedCounts[category]}
                            </span>
                        </div>
                    </div>

                    <div className='grid grid-cols-6 gap-4'>
                        {beds.map(bed => (
                            <div key={bed.id} className={`relative p-4 rounded-lg border ${bed.checked ? 'bg-green-400' : 'bg-gray-200'}`}>
                                <input 
                                    type="checkbox" 
                                    checked={bed.checked} 
                                    onChange={() => handleBedToggle(bed.id)} 
                                    className='absolute top-2 left-2' 
                                />
                                <input 
                                    type="text" 
                                    value={bed.patientName} 
                                    onChange={(e) => handleNameChange(bed.id, e.target.value)} 
                                    placeholder="Patient Name" 
                                    className='w-full text-center border rounded' 
                                />
                                <p className='text-center mt-2'>Bed {bed.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BedManagement;

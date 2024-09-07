import React from 'react';
import UserSidenav from './partials/UserSidenav'; // Make sure the path is correct
import UserTopnav from './partials/UserTopnav';   // Make sure the path is correct

const fakeReports = [
  { id: 1, name: 'Blood Test Report', date: '2024-08-15', file: 'blood-test-report.pdf' },
  { id: 2, name: 'X-ray Report', date: '2024-08-12', file: 'x-ray-report.pdf' },
  { id: 3, name: 'MRI Scan Report', date: '2024-07-30', file: 'mri-scan-report.pdf' },
  { id: 4, name: 'COVID-19 Test Report', date: '2024-08-01', file: 'covid-test-report.pdf' },
  { id: 5, name: 'Annual Check-up Report', date: '2024-06-25', file: 'annual-checkup-report.pdf' },
];

const UserViewReports = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <UserSidenav />

      {/* Main content area */}
      <div className="w-[80%] h-screen flex flex-col bg-zinc-200">
        {/* Top navigation */}
        <UserTopnav />

        {/* Content area */}
        <div className="flex-grow p-8">
          <h1 className="text-2xl font-bold text-[#4AB88B]">User Reports</h1>

          {/* Reports list */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Reports</h2>
            <ul className="space-y-4">
              {fakeReports.map((report) => (
                <li 
                  key={report.id} 
                  className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{report.name}</h3>
                    <p className="text-gray-500">Date: {report.date}</p>
                  </div>
                  <a
                    href={`/reports/${report.file}`} // Link to download the fake report
                    className="bg-[#4AB88B] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#3a976f] duration-300"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewReports;

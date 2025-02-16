import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserLayout = () => {


  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">User Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/user"
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700`}
              
            >
              Profile Information
            </Link>
          </li>
          <li>
            <Link to="change-password"
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700`}
              
            >
              Change Password
            </Link>
          </li>
          <li>
            <Link to="order-history"
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700`}
              
            >
              Order History
            </Link>
          </li>
          <li>
            <Link to="tranaction-history"
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 `}
             
            >
              Transaction History
            </Link>
          </li>
        </ul>
      </div>

    <Outlet />

    </div>
    </>
  );
};

export default UserLayout;

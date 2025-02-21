import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AllMail = () => {
  const [emails, setEmails] = useState([
    { id: 1, sender: "John Doe", subject: "Meeting Reminder", date: "Feb 18, 2025" },
    { id: 2, sender: "Amazon", subject: "Your Order Has Shipped!", date: "Feb 17, 2025" },
    { id: 3, sender: "Netflix", subject: "New Shows You Might Like", date: "Feb 16, 2025" },
    { id: 4, sender: "LinkedIn", subject: "Job Alert: New Opportunities", date: "Feb 15, 2025" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleDeleteClick = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setEmails(emails.filter(email => email.id !== selectedEmail.id));
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-900">Inbox</h1>
        <NavLink to="/admin-dashboard/add-product" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600">
          Form
        </NavLink>
      </div>

      <div className="relative overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100 dark:bg-gray-700">
            <tr>
            <th className="px-4 py-3"></th>
              <th className="px-6 py-3">S.NO</th>
              <th className="px-6 py-3">Sender</th>
              <th className="px-6 py-3">Subject</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                <td className="px-4 py-4"><input type="checkbox" className="form-checkbox h-4 w-4 accent-blue-300" /></td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{email.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{email.sender}</td>
                <td className="px-6 py-4">{email.subject}</td>
                <td className="px-6 py-4 text-gray-500">{email.date}</td>
                <td className="px-6 py-4 flex justify-center space-x-4">
                  <button className="text-blue-500 hover:text-blue-700" title="Edit">
                    <FaEdit size={18} />
                  </button>
                  <button onClick={() => handleDeleteClick(email)} className="text-red-500 hover:text-red-700" title="Delete">
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Unchanged) */}
      <nav className="mt-4 flex justify-end">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <NavLink to="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </NavLink>
          </li>
          <li><NavLink to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</NavLink></li>
          <li><NavLink to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</NavLink></li>
          <li><NavLink to="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</NavLink></li>
          <li><NavLink to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</NavLink></li>
          <li><NavLink to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</NavLink></li>
          <li>
            <NavLink to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]"> {/* Increased width */}
          <h2 className="text-xl font-semibold">Confirm Delete</h2>
          <p>Are you sure you want to delete?</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded-lg">
              Cancel
            </button>
            <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default AllMail;

import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulate password change process
    setSuccess('Password changed successfully!');
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full h-screen">
      <div className="bg-white shadow-lg rounded-lg p-9 w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Change Password</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
        <form onSubmit={handleChangePassword} className="flex flex-col">
          <label className="mb-2">Old Password</label>
          <input
            type="password"
            className="border p-3 mb-4 rounded w-full"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <label className="mb-2">New Password</label>
          <input
            type="password"
            className="border p-3 mb-4 rounded w-full"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label className="mb-2">Confirm New Password</label>
          <input
            type="password"
            className="border p-3 mb-6 rounded w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-green-600 transition w-full"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

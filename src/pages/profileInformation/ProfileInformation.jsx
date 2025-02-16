import React from 'react';

const ProfileInformation = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg text-gray-900 border border-gray-300">
      {/* Profile Header */}
      <div className="flex items-center mb-8">
        <img
          className="w-40 h-40 rounded-full object-cover mr-8 border-4 border-gray-300"
          src="https://via.placeholder.com/150" // Replace with actual profile image
          alt="Profile"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-xl text-gray-600">@johndoe</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Bio</h2>
        <p className="text-lg text-gray-700">
          Software Developer | Tech Enthusiast | Passionate about learning new technologies and building innovative solutions.
        </p>
      </div>

      {/* Details Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Details</h2>
        <ul className="space-y-4 text-lg text-gray-700">
            <li>
                <p>If a magazine editor asks you to write a profile of an up-and-coming novelist, she's asking you to write a biographical sketch, to give the readers a sense of the novelist as a person.</p>
            </li>
          <li>
            <strong className="font-semibold">Email:</strong> Pandey@example.com
          </li>
          <li>
            <strong className="font-semibold">Location:</strong> Patan Dhoka
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default ProfileInformation;

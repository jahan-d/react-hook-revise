import React, { useState, useContext } from 'react';
import { FriendsContext } from '../providers/Provider';

const AddPage = () => {
  const { friends, setFriends } = useContext(FriendsContext);
  const [friendName, setFriendName] = useState('');

  const addFriend = () => {
    if (friendName.trim() === '') return;

    // ✅ immutable array update
    setFriends([...friends, friendName]);
    setFriendName(''); // clear input after adding
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Friend</h1>

        <input
          type="text"
          placeholder="Enter friend name"
          value={friendName} // ✅ controlled input
          onChange={(e) => setFriendName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-600 mb-6 hover:shadow-lg transition-shadow bg-white text-gray-700 font-medium"
        />

        <button
          onClick={addFriend}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Add Friend
        </button>

        <p className="text-gray-700 mt-4">
          Friend name: <strong>{friendName}</strong>
        </p>
      </div>
    </div>
  );
};

export default AddPage;

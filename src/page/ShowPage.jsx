import React, { useState, useContext, use } from 'react';
import { FriendsContext } from '../providers/Provider';
// import { useLoaderData } from 'react-router';
// import axios from 'axios';

const ShowPage = () => {

  // const frnds = useLoaderData();

  const { friends } = useContext(FriendsContext);
  const [value, setValue] = useState('');

  // How AXIOS work -> 
  // const friendsPromise = axios.get('friends.json'); //this line creates a promise 
  // const friendsData = use(friendsPromise); //this line is gonna resolve the promise

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Search Friends</h1>

        <input
          type="text"
          value={value} // controlled input
          onChange={(e) => setValue(e.target.value)}
          placeholder="search by name"
          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-600 mb-6 hover:shadow-lg transition-shadow bg-white text-gray-700 font-medium"
        />

        <div className="space-y-2">
          {(friends || [])
            .filter(f => f.toLowerCase().includes(value.toLowerCase()))
            .map((friend, index) => (
              <p
                key={index} // use index in case of duplicate names
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow text-gray-700 font-medium"
              >
                {friend}
              </p>
            ))}

          {(friends || []).length === 0 && (
            <p className="text-gray-500">No friends yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPage;

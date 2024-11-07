import React from 'react';
import DeleteAllUsers from '../DeleteAllUsers/DeleteAllUsers';
import { fakeUserData } from '../../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/UserSlice';

const UserDetails = () => {

const dispatch = useDispatch();

const addNewUser = (payload)=>{
    dispatch(addUser(payload));
}


  return (
    <div className="w-11/12 max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">List of User Details</h2>
        <button onClick={()=>{addNewUser(fakeUserData())}} className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-200">
          Add New User
        </button>
      </div>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <span>Shoes</span>
        </li>
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <span>Pens</span>
        </li>
      </ul>

      <hr className="my-6 border-gray-300" />

      <div className="flex justify-end">
        <DeleteAllUsers />
      </div>
    </div>
  );
};

export default UserDetails;

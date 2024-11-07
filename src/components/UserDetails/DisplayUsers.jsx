import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/slices/UserSlice';

const DisplayUsers = () => {

    const users = useSelector(state => { return state.users});
    const dispatch = useDispatch();

    const deleteUsers = (id)=>{
        dispatch(removeUser(id))
    }
  
  return (
    <div>
        <ul className="space-y-3 text-gray-700">
     {
      users.map((user, index)=> <li key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <span className=''>{user}</span>
          <button onClick={()=>deleteUsers(index)} className='btn rounded-full'>❌</button>
        </li>
      )
     }
    
      </ul>
    </div>
  )
}

export default DisplayUsers
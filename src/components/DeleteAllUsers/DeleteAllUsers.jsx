import { useDispatch, useSelector } from "react-redux"
import { clearAllUsers } from "../../store/slices/UserSlice";

const DeleteAllUsers = () => {


  const user = useSelector((state)=>state.users);
  const dispatch = useDispatch();
  
  const deleteAllUsers = ()=>{
      dispatch(clearAllUsers());
  }


  return (
    <div>
      <button onClick={deleteAllUsers} className="btn">Delete All</button>
    </div>
  )
}

export default DeleteAllUsers
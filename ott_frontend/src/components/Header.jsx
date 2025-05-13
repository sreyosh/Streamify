import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import {setUser} from '../redux/userSlice';
import toast from 'react-hot-toast';
import {setToggle} from '../redux/MovieSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((state)=>state.userStore.user);
  const toggle=useSelector((state)=>state.movie.toggle);
  const logoutHandler= async()=>{
try {
  const res=await axios.get(`${API_END_POINT}/logout`);
  if(res.data.success){
    toast.success(res.data.message)
  }
  dispatch(setUser(null));
  navigate("/")
} catch (error) {
  console.log(error);
  
}
  }

  const toggleHandler = () => {
   // console.log(search); // Check if this logs
    dispatch(setToggle());
    //console.log(search); // Check if this logs
  }


  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 py-4 bg-gradient-to-r from-green-900 via-blue-300 to-green-900 shadow-lg opacity-95'>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          OTT
        </div>
        <h1 className="text-3xl text-white font-bold tracking-wide">Streamify</h1>
      </div>
{
    user && (<div className='flex items-center ml-2 gap-2'>
        <IoIosArrowDropdown size="24px" color='white' />
        <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>

        <div className='flex items-center gap-4 ml-6'>
          <button onClick={logoutHandler} className="bg-green-600 text-white hover:bg-green-700 hover:text-white px-5 py-2 rounded-md transition duration-300 text-lg font-semibold">
            Logout
          </button>

          <button onClick={toggleHandler} className="bg-green-600 text-white hover:bg-green-700 hover:text-white px-5 py-2 rounded-md transition duration-300 text-lg font-semibold">
            {toggle?"Home":"Search"}
          </button>
        </div>
      </div>)
}
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { useNavigate } from 'react-router-dom'; 
import {toast} from 'react-hot-toast';
import { useDispatch ,useSelector} from 'react-redux';
import {setLoading, setUser} from '../redux/userSlice'

//mport {setLoading} from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isLoading=useSelector((state)=>state.userStore.isLoading)
  const navigate=useNavigate();
const dispatch=useDispatch();
  const getInputdata=async (e)=>{
    e.preventDefault();
  //  console.log(44444);
//console.log(fullName,email,password,isLogin);
    if(isLogin){
//console.log(email,password);
const user={email,password};
dispatch(setLoading(true))
try {
  
  const res=await axios.post(`${API_END_POINT}/login`,user,
{
    headers:{
      "Content-Type":'application/json'
    },
    withCredentials:true
  }
  );
  //console.log(res.data.message);
  if(res.data.success){
    toast.success(res.data.message)
  }
 // console.log(res)
dispatch(setUser(res.data.user))
  navigate("/browse")

 } catch (error) {
  toast.error(error.response.data.message)
  console.log(error);
  
 }
 finally{
  dispatch(setLoading(false))
 }
    }
    else{
      const user={fullName,email,password}
      dispatch(setLoading(true))
// console.log(fullname,email,password);
try {
  const res=await axios.post(`${API_END_POINT}/register`,user,
    {
      headers:{
        "Content-Type":'application/json'
      },
      withCredentials:true
    }
  );
 // console.log(res);
  if(res.data.success){
    toast.success(res.data.message)
  }
  setIsLogin(true);
 } catch (error) {
  toast.error(error.response.data.message)
  console.log(error);

  
 }
 finally{
  dispatch(setLoading(false));
 }
    }
 
   
    setFullname("");
    setEmail("");
    setPassword("");

  }
  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="https://wallpaperaccess.com/full/3988284.jpg" alt="Background" className="object-cover w-full h-full" />
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
      {/* Centered Login Form */}
      <div className="relative flex justify-center items-center h-full  ">
        <div className="bg-black opacity-85 px-10 py-10 rounded-md max-w-md w-full text-white">
          <h2 className="text-3xl font-bold mb-6">{isLogin ? "Login" : "Sign Up"}</h2>
          <form className="flex flex-col gap-4  " onSubmit={getInputdata}>
            {
              !isLogin && <input value={fullName} onChange={(e)=>setFullname(e.target.value)} type="text" placeholder="Fullname" className="p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" />
            }
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <div className="relative">
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 w-full pr-10" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <button className="bg-green-600 hover:bg-green-700 py-3 rounded-md font-semibold text-lg">{`${isLoading ? "Loading...":(isLogin?"Login":"Signup")}`}</button>
          </form>
          <p className="mt-6 text-gray-400 text-sm"> {isLogin ? "New to Streamify" : "Already have an account?"} <span onClick={() => setIsLogin(!isLogin)} className="text-green-500 hover:underline cursor-pointer">{isLogin ? "Sign Up" : "Login"}</span>.</p>
        </div>
      </div>
    </div>
  );
};
export default Login;

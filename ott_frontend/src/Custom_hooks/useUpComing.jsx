import axios from 'axios';
import React from 'react'
import { options, Upcoming } from '../utils/constant';
import {getUpComing} from '../redux/MovieSlice'
import { useDispatch } from 'react-redux';
const useUpComing = async() => {
    const dispatch=useDispatch();
 try {
    const res=await axios.get(Upcoming,options);
   // console.log(res)
    dispatch(getUpComing(res.data.results))
 } catch (error) {
    console.log(error);
    
 }
}

export default useUpComing;
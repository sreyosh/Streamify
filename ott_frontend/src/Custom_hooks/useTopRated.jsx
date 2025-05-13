import axios from 'axios';
import React from 'react'
import { options,Top_Rated } from '../utils/constant';
import {getTopRated} from '../redux/MovieSlice'
import { useDispatch } from 'react-redux';
const useTopRated = async() => {
    const dispatch=useDispatch();
 try {
    const res=await axios.get(Top_Rated,options);
    //console.log(res)
    dispatch(getTopRated(res.data.results))
 } catch (error) {
    console.log(error);
    
 }
}

export default useTopRated;
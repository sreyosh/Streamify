import axios from 'axios';
import React from 'react'
import { options, Popular_Movie } from '../utils/constant';
import {getPopularMovie} from '../redux/MovieSlice'
import { useDispatch } from 'react-redux';
const usePopularMovie = async() => {
    const dispatch=useDispatch();
 try {
    const res=await axios.get(Popular_Movie,options);
    //console.log(res)
    dispatch(getPopularMovie(res.data.results))
 } catch (error) {
    console.log(error);
    
 }
}

export default usePopularMovie;
import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import axios from 'axios'
import { Now_Playing_Movie, options } from '../utils/constant'
import {getNowPlayingMovie} from '../redux/MovieSlice'
import useNowPlayingMovie from '../Custom_hooks/useNowPlayingMovie'
import usePopularMovie from '../Custom_hooks/usePopularMovie'
import useTopRated from '../Custom_hooks/useTopRated'
import useUpComing from '../Custom_hooks/useUpComing'
import SearchMovie from './SearchMovie'




const Browse = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.userStore.user);
  const toggle=useSelector((state)=>state.movie.toggle);

  useNowPlayingMovie();
  usePopularMovie();
  useTopRated();
  useUpComing();

  useEffect(()=>{
    if(!user){
      navigate("/");
      
    }

    
  },[])
  return (
    <div>
      <Header/>
    <div>
{
  toggle?<SearchMovie/>:
  (
  <>
  <MainContainer/>
    <MovieContainer/>
    </>
  )
}
    

    </div>
    </div>
  )
}

export default Browse
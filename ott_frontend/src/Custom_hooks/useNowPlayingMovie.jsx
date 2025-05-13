
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Now_Playing_Movie, options } from '../utils/constant'
import {getNowPlayingMovie} from '../redux/MovieSlice'
 
 const useNowPlayingMovie=async()=>{
    const dispatch=useDispatch();
    try {
      const res=await axios.get(Now_Playing_Movie,options);
      //console.log(res)
      dispatch(getNowPlayingMovie(res.data.results))
    } catch (error) {
      console.log(error);
      
    }
  }
  export default useNowPlayingMovie;
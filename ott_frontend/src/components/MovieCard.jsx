import React from 'react'
import { Banner_Url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getId, getOpen } from '../redux/MovieSlice';

const MovieCard = ({posterPath,movieId}) => {
  const dispatch=useDispatch();
  if(posterPath===null)return null;
  const handleOpen=()=>{
    dispatch(getId(movieId))
    dispatch(getOpen(true))
  }
  return (
    <div className='w-48 pr-2 hover:scale-105 transition-transform duration-200' onClick={handleOpen}>
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img 
          src={`${Banner_Url}/${posterPath}`}
          alt="movie"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
          }}
        />
      </div>
    </div>
  )
}

export default MovieCard
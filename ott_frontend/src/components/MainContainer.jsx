import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie=useSelector(store=>store.movie?.nowPlayingMovie);
  if(!movie)return;
 // console.log(movie);
 const{overview,id,title}=movie[1];
   return (
    <div className="relative w-screen h-screen">
      <VideoBackground movieId={id}/>
      <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer

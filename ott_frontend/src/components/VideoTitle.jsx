import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute text-white top-[40%] left-[5%] z-10'>
      <h1 className='text-4xl font-bold mb-4'>{title}</h1>
      <p className = ' w-1/3 mt-2 text-lg mb-6'>{overview}</p>
      <div className="flex space-x-4">
      <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md' ><FaRegPlayCircle /><span>Play</span></button>
      <button className='px-6 py-2 bg-white text-black rounded-md'>Watch More</button>
      </div>
    </div>
  )
}

export default VideoTitle

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
    const movie=useSelector(state=>state.movie);
    //console.log(movie);
    return (
        <div className='bg-gray-500'>
            <div className='-mt-30 relative z-10'>
                <MovieList  title={"Popular Movie"} movies={movie.popularMovie}/>
                <MovieList  title={"Now Playing Movie"} movies={movie.nowPlayingMovie}/>
                <MovieList  title={"Top Rated"} movies={movie.topRated}/>
                <MovieList  title={"Up Coming"} movies={movie.upComing}/>
            </div>
        </div>
    )
}

export default MovieContainer
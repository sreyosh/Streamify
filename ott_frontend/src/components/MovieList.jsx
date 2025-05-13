import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies ,search=false}) => {
    if (!movies) return null;

    return (
        <div className='px-5 pb-4'>
            <h1 className="text-black text-4xl mb-4 font-bold">{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden 
                          [scrollbar-width:thin]
                          [scrollbar-color:#cbd5e1_transparent]
                          [&::-webkit-scrollbar]:h-[3px]
                          [&::-webkit-scrollbar-thumb]:bg-slate-300
                          [&::-webkit-scrollbar-track]:bg-transparent">
                <div className='flex space-x-4 pb-2'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movieId={movie.id}posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
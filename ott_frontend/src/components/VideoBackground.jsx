import React from 'react';
import useMovieById from '../Custom_hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie);

    useMovieById(movieId);

    const containerClass = bool ? "w-full h-full" : "w-screen h-screen";
    const iframeClass = bool ? "w-full h-full" : "w-screen h-screen aspect-video";

    return (
        <div className={`relative ${containerClass}`}>
            {trailerMovie?.key && (
                <iframe
                    className={iframeClass}
                    src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=0&controls=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoBackground;

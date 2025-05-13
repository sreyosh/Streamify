import axios from 'axios';
import React, { useState } from 'react';
import { options, Search_Movie } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(store => store.userStore.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);

  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // NEW

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${Search_Movie}${query}&include_adult=false&language=en-US&page=1`, options);
      const movies = res?.data?.results || [];
      dispatch(setSearchMovieDetails({ searchMovie: query, movies }));
      setHasSearched(true); // Mark that a search has occurred
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }

    setQuery("");
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex justify-center pt-[10%] w-full">
        <form onSubmit={submitHandler} className="w-1/2  ">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-500 rounded-lg w-full">
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movies...."
            />
            <button className="bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-2">
              {isLoad ? "Loading...." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {/* Render only after a search has been made */}
      {hasSearched && (
        searchedMovie?.length > 0 ? (
          <MovieList title={movieName} searchMovie={true} movies={searchedMovie} />
        ) : (
          <h1 className="text-center mt-10 text-5xl text-black">Movie Not Found!!</h1>
        )
      )}
    </div>
  );
};

export default SearchMovie;

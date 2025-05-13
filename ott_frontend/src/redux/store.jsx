import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from './userSlice';
import movieReducer from './MovieSlice'
import searchReducer from './searchSlice';
const store=configureStore({
    reducer:{
       userStore:userReducer ,
       movie:movieReducer,
       searchMovie:searchReducer
    }
})

export default store;
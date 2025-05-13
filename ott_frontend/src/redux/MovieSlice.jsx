import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
name:"movie",
initialState:{
    nowPlayingMovie:null,
    popularMovie:null,
    topRated:null,
    upComing:null,
    toggle:false,
    trailerMovie:null,
    open:false,
    id:""
},
reducers:{
    getNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovie=action.payload
    },
    getPopularMovie:(state,action)=>{
     state.popularMovie=action.payload
    },
    getTopRated:(state,action)=>{
        state.topRated=action.payload
    },
    getUpComing:(state,action)=>{
        state.upComing=action.payload
    },
    setToggle:(state)=>{
       state.toggle=!state.toggle
    },
    getTrailerMovie:(state,action)=>{
        state.trailerMovie=action.payload
    },
    getOpen:(state,action)=>{
        state.open=action.payload;
    },
    getId:(state,action)=>{
        state.id=action.payload;
    }
}



})

export const{getNowPlayingMovie,getPopularMovie,getTopRated,getUpComing,setToggle,getTrailerMovie,getOpen,getId}=movieSlice.actions;
export default movieSlice.reducer;
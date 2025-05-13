import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import {Toaster}from 'react-hot-toast'
import MovieDialog from './components/MovieDialog'
function App() {
  return(
    <>
     <Body/>
    <Toaster/>
    <MovieDialog/>
    </>
  )
}

export default App

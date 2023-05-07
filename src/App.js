import React, { useState, useEffect } from 'react'
// import Navbar from './Components/Navbar'
import axios from 'axios';
// import MoviesCards from './Components/MoviesCards';
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
import WriteReview from './Components/WriteReview';
// import API from './API/ApiConfig'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://movies-api-20pq.onrender.com/api/movies");
      setMovies(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, [])
  // console.log(movies);
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage movies={movies} loading={loading}/>} />
        <Route path='/api/movies/:imdbId' element={<WriteReview/>} />
      </Routes>
    </>
  )
}

export default App
import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState,useEffect } from 'react'
import { searchMovies,getPopularMovies } from '../services/api'
import '../css/Home.css'

const Home = () => {
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    const loadPopularMovies = async  ()=>{
      try{
        const popluarMovies = await getPopularMovies();
        setMovies(popluarMovies);
      } catch(err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    
    loadPopularMovies(); 
  },[]);

  return (
    <div className='home'>
      {error && <div className='error-message'>{error}</div>}
      { loading? (
          <div className='loading'>Loading...</div>
        ):(
          <div className='movies-grid'>
            {
              movies.map(movie =>(
                <MovieCard movie={movie} key={ movie.id} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Home
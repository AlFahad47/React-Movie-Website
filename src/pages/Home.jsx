import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState,useEffect } from 'react'
import { searchMovies,getPopularMovies } from '../services/api'
import '../css/Home.css'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = async (e)=>{
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return
    setLoading(true)
    try{
      const serachResults = await searchMovies(searchQuery)
      setMovies(serachResults)
      setError(null)
    }catch(err){
      console.log(err)
      setError("failed to search movies...")
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className='home'>

      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>

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
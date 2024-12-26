import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import '../css/Favorites.css'

const Favorites = () => {
  const {favorites} = useMovieContext();

  if(favorites.length !== 0){
    return(
      <div className='favorites'>
        <h2> Your Favorites</h2>
        <div className='movie-grid'>
          {
            favorites.map(movie=>(
              <MovieCard movie={movie} key={movie.id} />
            )) 
          }
        </div>
      </div>
    );
  }
  
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet...</h2>
      <p>Start adding movies to your favorites they will appear here!</p>
    </div>
  )
}

export default Favorites
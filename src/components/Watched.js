// Watched.js

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
  const { watched, rateMovie, removeFromWatched } = useContext(GlobalContext);

  const handleRateMovie = (movieId, ratingValue) => {
    rateMovie(movieId, ratingValue); // Update movie rating in global state
  };

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                type="watched"
                onRate={handleRateMovie} // Pass the rate function here
                onRemoveFromWatched={removeFromWatched} // Pass remove function here if needed
              />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;

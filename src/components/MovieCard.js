import React, { useState } from 'react';
import MovieControls from './MovieControls';
import StarRating from './StarRating';
import './MovieCard.css'; // Import CSS file for MovieCard styling

const MovieCard = ({ movie, type, onAddToWatched, onRemoveFromWatched }) => {
  const [rating, setRating] = useState(movie.rating);
  const [showRating, setShowRating] = useState(false);

  const handleRate = (newRating) => {
    setRating(newRating);
    // Optionally, you can call an API or dispatch an action to update the rating globally
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setShowRating(true)}
      onMouseLeave={() => setShowRating(false)}
    >
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}

      <div className="movie-info">
        <h3>{movie.title}</h3>
        {showRating && type === 'watched' && (
          <div className="rating-container">
            <p>Rating: {rating}</p>
            <StarRating onRate={handleRate} />
          </div>
        )}
      </div>

      <MovieControls
        movie={movie}
        type={type}
        onAddToWatched={onAddToWatched}
        onRemoveFromWatched={onRemoveFromWatched}
      />
    </div>
  );
};

export default MovieCard;

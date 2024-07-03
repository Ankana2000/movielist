import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type, onAddToWatched, onRemoveFromWatched, onRate }) => {
  const {
    addMovieToWatched,
    removeMovieFromWatchList,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  const handleAddToWatched = () => {
    if (type === 'watchList') {
      addMovieToWatched(movie);
    } else if (type === 'watched') {
      moveToWatchlist(movie);
    }
  };

  const handleRemoveFromWatched = () => {
    if (type === 'watchList') {
      removeMovieFromWatchList(movie.id);
    } else if (type === 'watched') {
      removeFromWatched(movie.id);
    }
  };

  return (
    <div className="inner-card-controls">
      {type === 'watchList' && (
        <>
          <button className="ctrl-btn" onClick={handleAddToWatched}>
            <i className="far fa-eye"></i> {/* Eye icon */}
          </button>
          <button className="ctrl-btn" onClick={handleRemoveFromWatched}>
            <i className="fa fa-times"></i> {/* Cross icon */}
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className="ctrl-btn" onClick={handleAddToWatched}>
            <i className="far fa-eye-slash"></i> {/* Crossed eye icon */}
          </button>
          <button className="ctrl-btn" onClick={handleRemoveFromWatched}>
            <i className="fa fa-times"></i> {/* Cross icon */}
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

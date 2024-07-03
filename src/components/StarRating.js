// StarRating.js

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ onRate }) => {
  const [rating, setRating] = useState(null); // Initial state for rating
  
  const handleClick = (value) => {
    setRating(value);
    onRate(value); // Call onRate function passed from parent component (MovieCard)
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [count, setCount] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
    setCount(starValue);
    if (onChange) {
      onChange(starValue);
    }
  };

  const getRatingLabel = () => {
    switch (rating) {
      case 1:
        return 'Good';
      case 2:
      case 3:
        return 'Average';
      case 4:
        return 'Very Good';
      case 5:
        return 'Excellent';
      default:
        return '';
    }
  };

  return (
    <div>
      <p>Selected Stars: {count}</p>
      <p>Rating: {getRatingLabel()}</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
        >
          <Star />
        </span>
      ))}
    </div>
  );
};

export default Rating;

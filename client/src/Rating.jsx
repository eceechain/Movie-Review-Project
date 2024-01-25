import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [count, setCount] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false); // New state for success message

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate an API call
    console.log('Submitting review...');
    setTimeout(() => {
      console.log('Review submitted successfully!');
      setSubmitSuccess(true); // Set success state to true
      // Reset form fields
      setMovieTitle('');
      setRating(0);
      setReviewText('');
    }, 1000);
  };

  return (
    <div>
      {submitSuccess && <p className="success-message">Review submitted successfully!</p>}
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
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Your Rating:
          <input type="number" value={rating} readOnly />
        </label>
        <br />
        <label>
          Your Review:
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Rating;

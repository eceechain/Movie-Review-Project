import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Dropdown from './Dropdown'; // Assuming the path to the Dropdown component file
import './Rating.css';

const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [count, setCount] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const fetchMovieTitles = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieTitles(data);
      } catch (error) {
        console.error('Error fetching movie titles:', error.message);
      }
    };

    fetchMovieTitles();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate an API call to submit the review
    try {
      const response = await fetch('http://127.0.0.1:5000/submitReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieTitle,
          rating,
          reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Review submitted successfully!');
      setSubmitSuccess(true);
      // Reset form fields
      setMovieTitle('');
      setRating(0);
      setReviewText('');
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

  return (
    <div>
      {submitSuccess && <p className="success-message">Review submitted successfully!</p>}
      <p>Selected Stars: {count}</p>
      <p>Rating: {getRatingLabel()}</p>
      <Dropdown
  selectedValue={movieTitle}
  onSelect={(selectedMovie) => setMovieTitle(selectedMovie)}
  options={movieTitles.map((movie) => ({
    value: movie.id,
    label: movie.title
  }))}
/>

      
      <Star
        size="24"
        onClick={() => handleStarClick(1)}
        color={rating >= 1 ? '#FFD700' : '#A0A0A0'}
      />
      <Star
        size="24"
        onClick={() => handleStarClick(2)}
        color={rating >= 2 ? '#FFD700' : '#A0A0A0'}
      />
      <Star
        size="24"
        onClick={() => handleStarClick(3)}
        color={rating >= 3 ? '#FFD700' : '#A0A0A0'}
      />
      <Star
        size="24"
        onClick={() => handleStarClick(4)}
        color={rating >= 4 ? '#FFD700' : '#A0A0A0'}
      />
      <Star
        size="24"
        onClick={() => handleStarClick(5)}
        color={rating === 5 ? '#FFD700' : '#A0A0A0'}
      />
      <form onSubmit={handleSubmit}>
        <label>
          Review Text:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Rating;

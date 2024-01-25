import React, { useState } from 'react';
import './Reviews.css';

const MovieReviewForm = () => {
  const [formData, setFormData] = useState({
    movieTitle: '',
    userRating: '',
    userReview: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Movie Review Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieTitle">Movie Title:</label>
        <input
          type="text"
          id="movieTitle"
          name="movieTitle"
          value={formData.movieTitle}
          onChange={handleChange}
          required
        />

        <label htmlFor="userRating">Your Rating (out of 10):</label>
        <input
          type="number"
          id="userRating"
          name="userRating"
          min="1"
          max="10"
          value={formData.userRating}
          onChange={handleChange}
          required
        />

        <label htmlFor="userReview">Your Review:</label>
        <textarea
          id="userReview"
          name="userReview"
          value={formData.userReview}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default MovieReviewForm;

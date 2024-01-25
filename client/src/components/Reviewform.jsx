import React, { useState } from 'react';
import '../styles/Review.css';

function Review() {
  const [userId, setUserId] = useState('');
  const [movieId, setMovieId] = useState('');
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleContentChange = (e) => {
    const inputContent = e.target.value;
    setContent(inputContent);
    setCharacterCount(inputContent.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !movieId || !content || !comment || !rating) {
      alert('Please fill out all fields.');
      return;
    }

    const reviewData = {
      userId,
      movieId,
      content,
      comment,
      rating
    };

    try {
      const response = await fetch('http://127.0.0.1:5555/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      alert('Review submitted successfully!');
      // Reset form fields
      setUserId('');
      setMovieId('');
      setContent('');
      setComment('');
      setRating('');
      setCharacterCount(0);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('An error occurred while submitting the review.');
    }
  };

  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User:</label>
          <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="movieId">Movie ID:</label>
          <input type="text" id="movieId" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <input type="text" id="content" value={content} onChange={handleContentChange} />
          <div className="character-counter">{characterCount}/100</div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;

import React, { useState, useEffect } from 'react';
import '../styles/Reviewx.css'

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/reviews')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(reviewData => {
        setReviews(reviewData);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>All Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>User ID: {review.userId}</p>
            <p>Movie ID: {review.movieId}</p>
            <p>Content: {review.content}</p>
            <p>Comment: {review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

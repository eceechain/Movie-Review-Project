// Movie.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Movie.css';

function Movie() {
  const { id: movieId } = useParams(); // Corrected: Renamed id to movieId
  const userId = 'user123'; // Placeholder for user ID, replace with actual user ID from authentication

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(0); // assuming rating is on a scale of 1-5
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/movies/${movieId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const movieData = await response.json();
        setMovie(movieData);
        setStatus('resolved');
      } catch (error) {
        console.error('Error fetching movie:', error);
        setError('An error occurred while fetching the movie.');
        setStatus('rejected');
      }
    };

    fetchMovieById();
  }, [movieId]);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5555/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: movieId,
          userId: userId,
          content: reviewContent,
          rating: rating,
          comments: comments
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
      console.log('Review submitted successfully');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
    setReviewContent('');
    setRating(0);
    setComments('');
  };

  if (status === 'pending') return <h1 className="loading">Loading...</h1>;
  if (status === 'rejected') return <h1 className="error">Error: {error}</h1>;

  if (!movie) {
    return <h1 className="error">Movie data is missing or invalid</h1>;
  }

  return (
    <div className="movie-container">
      <h2 className="movie-title">{movie.title}</h2>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <p className="movie-genre">Genre: {movie.genre}</p>
      <p className="movie-release-year">Release Year: {movie.release_year}</p>
      <p className="movie-director">Director: {movie.director}</p>

      <div className="link-container">
        <button onClick={() => setShowReviewForm(true)} className="link-button">
          Add Review
        </button>
        
        {/* Link to the home page */}
        <Link to="/home" className="link-button">
          Back 
        </Link>
      </div>

      {showReviewForm && (
        <div className="review-form-container">
          <h3>Add Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <label htmlFor="reviewContent">Review Content:</label>
            <textarea
              id="reviewContent"
              value={reviewContent}
              onChange={(event) => setReviewContent(event.target.value)}
              placeholder="Write your review here..."
            />

            <label htmlFor="rating">Rating (1-5):</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(event) => setRating(parseInt(event.target.value))}
              min="1"
              max="5"
            />

            {/* Comments field */}
            <label htmlFor="comments">Comments:</label>
            <input
              type="text"
              id="comments"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
              placeholder="Any additional comments..."
            />

            <div>
              <button type="submit" className="submit-button">Submit Review</button>
              <button type="button" onClick={() => setShowReviewForm(false)} className="close-button">Close</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Movie;

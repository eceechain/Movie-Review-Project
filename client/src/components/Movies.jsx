import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Movie.css';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/movies/${id}`);
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
  }, [id]);

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

      <Link to="/review" className="review-link">
        Write a Review
      </Link>
      
      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </div>
  );
}

export default Movie;

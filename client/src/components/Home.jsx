import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reviewform from './Reviewform';
import '../styles/Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(movieData => {
        setMovies(movieData);
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
      <div className="review-container">
        <Reviewform />
      </div>
      <div className="Image">
        <img src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg" alt="Full Width Image" />
      </div>
      <div className="card-container">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <img src={movie.image} alt={movie.title} />
            <div className="card-body">
              <h2>{movie.title}</h2>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Release Year:</strong> {movie.release_year}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <Link to={`/movies/${movie.id}`} className="movie-details-button">
                Movie Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

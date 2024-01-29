import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar.jsx';
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
       <Searchbar />
      <div className="review-container">
      </div>
      <div className="Image">
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <img src={movie.image} alt={movie.title} />
          </Link>
        ))}
      </div>
          </div>
  );
}

export default Home;

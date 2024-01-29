import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Search.css'; // Import CSS file for styling

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('http://127.0.0.1:5555/movies');
        setFilteredMovies(response.data); // Initially set all movies as filtered movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setShowMovies(searchQuery !== '');
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setShowMovies(true);
  };

  const handleSelectMovie = (selectedMovie) => {
    window.location.href = `/movies/${selectedMovie.id}`; // Navigate to the movie details page
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {showMovies && (
        <ul className="movie-list">
          {filteredMovies.map(movie => (
            <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;

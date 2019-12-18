import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <Route render={(props) => (
        <MovieCard
        {...props}
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
        id={id}
        />
      )} />
    </Link>
  );
}

export default MovieList;

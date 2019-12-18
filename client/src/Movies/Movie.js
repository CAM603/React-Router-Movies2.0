import React, { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
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
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  );
}

export default Movie;

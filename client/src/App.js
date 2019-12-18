import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/movies">
        <MovieList/>
      </Route>
      <Route path="/movies/:id">
        <Movie
        addToSavedList={addToSavedList}
        />
      </Route>
    </div>
  );
};

export default App;

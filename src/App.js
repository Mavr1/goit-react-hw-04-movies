import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import Header from './components/header/Header';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

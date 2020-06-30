import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MoviesPage from './pages/MoviesPage';
import Header from './components/header/Header';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */)
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);

function App() {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

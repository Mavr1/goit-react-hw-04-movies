import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { getMovie } from '../services/apiServices';
import { formatGenresArray } from '../services/helpers';
import Cast from './Cast';
import Reviews from './Reviews';

class MovieDetailsPage extends Component {
  state = { movie: {} };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovie(id).then((data) => this.setState({ movie: data.data }));
  }

  render() {
    const {
      title,
      vote_average,
      overview,
      genres,
      poster_path,
      release_date,
    } = this.state.movie;
    return (
      <>
        {this.state.movie.title && (
          <div className="movieDetails">
            <div className="movieAbout">
              <img
                className="moviePoster"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="movie poster"
                width={250}
              />
              <div className="movieDiscription">
                <h2>{title}</h2>
                <p>Release date: {release_date}</p>
                <p>User score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{formatGenresArray(genres)}</p>
              </div>
            </div>
            <div className="additionalInfo">
              <h5>Additional Information</h5>
              <ul className="additionalInfo-menu">
                <li className="additionalInfo-menuItem">
                  <Link to={`${this.props.match.url}/cast`}>Cast</Link>
                </li>
                <li className="additionalInfo-menuItem">
                  <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <Switch>
                <Route path="/movies/:id/cast" component={Cast} />
                <Route path="/movies/:id/reviews" component={Reviews} />
              </Switch>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;

import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getMovie } from '../services/apiServices';
import MovieDetails from '../components/movieDetails/MovieDetails';
import AdditionalInfoMenu from '../components/additionalInfoMenu/AdditionalInfoMenu';

const CastPage = lazy(() =>
  import('./CastPage' /* webpackChunkName: "CastPage" */)
);
const ReviewsPage = lazy(() =>
  import('./ReviewsPage' /* webpackChunkName: "ReviewsPage" */)
);

class MovieDetailsPage extends Component {
  state = { movie: {} };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovie(id)
      .then((data) => this.setState({ movie: data.data }))
      .catch((error) => console.log(error));
  }

  onGoBack = () => {
    if (this.props.location.state.from) {
      const { from } = this.props.location.state;
      from &&
        this.props.history.push({
          pathname: `/movies`,
          search: from,
        });
    } else {
      this.props.history.push('/');
    }
  };

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
            <button onClick={this.onGoBack}>Go back</button>
            <MovieDetails
              poster={poster_path}
              title={title}
              releaseDate={release_date}
              vote={vote_average}
              overview={overview}
              genres={genres}
            />
            <div className="additionalInfo">
              <h4>Additional Information</h4>
              <AdditionalInfoMenu url={this.props.match.url} />
              <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                  <Route
                    path={`${this.props.match.path}/cast`}
                    component={CastPage}
                  />
                  <Route
                    path={`${this.props.match.path}/reviews`}
                    component={ReviewsPage}
                  />
                </Switch>
              </Suspense>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;

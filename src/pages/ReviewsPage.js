import React, { Component } from 'react';
import { getMovieReviews } from '../services/apiServices';
import { formatFilmListArray } from '../services/helpers';
import MovieReview from '../components/movieReview/MovieReview';

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieReviews(id)
      .then((data) => formatFilmListArray(data))
      .then((data) => this.setState({ reviews: data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <ul className="movieReview">
          {this.state.reviews.length > 0 ? (
            this.state.reviews.map((item) => {
              const { author, content, id } = item;
              return <MovieReview key={id} author={author} review={content} />;
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;

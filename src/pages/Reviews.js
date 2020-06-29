import React, { Component } from 'react';
import { getMovieReviews } from '../services/apiServices';
import { formatFilmListArray } from '../services/helpers';

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
              return (
                <li key={id} className="movieReview-item">
                  <h5 className="movieReview-author">Author:{author}</h5>
                  <p className="movieReview-review">{content}</p>
                </li>
              );
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

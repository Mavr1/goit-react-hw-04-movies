import React from 'react';

const MovieReview = ({ author, review }) => (
  <li className="movieReview-item">
    <h5 className="movieReview-author">Author:{author}</h5>
    <p className="movieReview-review">{review}</p>
  </li>
);

export default MovieReview;

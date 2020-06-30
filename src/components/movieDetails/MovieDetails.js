import React from 'react';
import { formatGenresArray } from '../../services/helpers';

const MovieDetails = ({
  poster,
  title,
  releaseDate,
  vote,
  overview,
  genres,
}) => (
  <div className="movieAbout">
    <img
      className="moviePoster"
      src={`https://image.tmdb.org/t/p/w500/${poster}`}
      alt="movie poster"
      width={250}
    />
    <div className="movieDiscription">
      <h2>{title}</h2>
      <p>Release date: {releaseDate}</p>
      <p>User score: {vote}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{formatGenresArray(genres)}</p>
    </div>
  </div>
);

export default MovieDetails;

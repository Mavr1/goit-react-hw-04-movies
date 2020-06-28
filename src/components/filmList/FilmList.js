import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = ({ filmList }) => (
  <ol className="filmList">
    {filmList.map((item) => (
      <li key={item.id} className="filmList-item">
        <Link to={`/movies/${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ol>
);

export default FilmList;

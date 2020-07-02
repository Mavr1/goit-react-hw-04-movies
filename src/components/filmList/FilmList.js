import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = ({ filmList, location }) => (
  <ol className="filmList">
    {filmList.map((item) => (
      <li key={item.id} className="filmList-item">
        <Link
          to={{
            pathname: `/movies/${item.id}`,
            state: { from: true },
          }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ol>
);

export default FilmList;

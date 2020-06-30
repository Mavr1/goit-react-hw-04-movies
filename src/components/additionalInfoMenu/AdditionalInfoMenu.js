import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalInfoMenu = ({ url }) => (
  <ul className="additionalInfo-menu">
    <li className="additionalInfo-menuItem">
      <Link to={`${url}/cast`}>Cast</Link>
    </li>
    <li className="additionalInfo-menuItem">
      <Link to={`${url}/reviews`}>Reviews</Link>
    </li>
  </ul>
);

export default AdditionalInfoMenu;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AdditionalInfoMenu = ({ url, location }) => (
  <ul className="additionalInfo-menu">
    <li className="additionalInfo-menuItem">
      <Link
        to={{
          pathname: `${url}/cast`,
          state: { from: true },
        }}
      >
        Cast
      </Link>
    </li>
    <li className="additionalInfo-menuItem">
      <Link
        to={{
          pathname: `${url}/reviews`,
          state: { from: true },
        }}
      >
        Reviews
      </Link>
    </li>
  </ul>
);

export default withRouter(AdditionalInfoMenu);

import React, { Component } from 'react';
import { getMovieCast } from '../services/apiServices';
import { formatCastArray } from '../services/helpers';

class Cast extends Component {
  state = { cast: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieCast(id)
      .then((data) => formatCastArray(data))
      .then((data) => this.setState({ cast: data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <ul className="movieCast">
          {this.state.cast !== null &&
            this.state.cast.map((item) => {
              const { character, name, profile_path, id } = item;
              return (
                <li key={id} className="cast-actorCard">
                  <img
                    className="cast-actorPhoto"
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    width={200}
                  />
                  <h4 className="cast-actorName">{name}</h4>
                  <p className="cast-actorChar">Character: {character}</p>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default Cast;

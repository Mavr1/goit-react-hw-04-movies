import React, { Component } from 'react';
import ActorCard from '../components/actorCard/ActorCard';
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
                <ActorCard
                  key={id}
                  name={name}
                  character={character}
                  profile={profile_path}
                />
              );
            })}
        </ul>
      </>
    );
  }
}

export default Cast;

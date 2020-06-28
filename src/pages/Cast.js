import React, { Component } from 'react';
import { getMovieCast } from '../services/apiServices';

class Cast extends Component {
  state = { cast: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieCast(id).then((data) => this.setState({ movie: data }));
  }

  render() {
    return (
      <>
        <h2>Cast</h2>
      </>
    );
  }
}

export default Cast;

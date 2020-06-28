import React, { Component } from 'react';
import FilmList from '../components/filmList/FilmList';
import { getMostPopular } from '../services/apiServices';
import { formatApiResponse } from '../services/helpers';

class HomePage extends Component {
  state = { filmList: null };

  componentDidMount() {
    getMostPopular()
      .then((data) => formatApiResponse(data))
      .then((data) => this.setState({ filmList: data }));
  }

  render() {
    return (
      <>
        <h2>Trending today</h2>
        {this.state.filmList !== null && (
          <FilmList filmList={this.state.filmList} />
        )}
      </>
    );
  }
}

export default HomePage;

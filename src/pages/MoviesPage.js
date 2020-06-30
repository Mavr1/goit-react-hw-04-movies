import React, { Component } from 'react';
import queryString from 'query-string';
import Search from '../components/search/Search';
import FilmList from '../components/filmList/FilmList';
import { searchMovie } from '../services/apiServices';
import { formatFilmListArray } from '../services/helpers';

class MoviesPage extends Component {
  state = { searchInput: '', filmList: null };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    query &&
      searchMovie(query)
        .then((data) => formatFilmListArray(data))
        .then((data) => this.setState({ filmList: data }))
        .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    const nextQuery = queryString.parse(this.props.location.search);
    const prevQuery = queryString.parse(prevProps.location.search);

    if (prevQuery.query !== nextQuery.query) {
      if (nextQuery.query === undefined) {
        this.setState({ filmList: null });
        return;
      }
      searchMovie(nextQuery.query)
        .then((data) => formatFilmListArray(data))
        .then((data) => this.setState({ filmList: data }))
        .catch((error) => console.log(error));
    }
  }

  setSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onSearchMovies = () => {
    searchMovie(this.state.searchInput)
      .then((data) => formatFilmListArray(data))
      .then((data) => {
        const setUrl = this.props.history.push({
          pathname: this.props.location.pathname,
          search: `query=${this.state.searchInput}`,
        });
        this.setState({ filmList: data, searchInput: '' }, setUrl);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <Search
          value={this.state.searchInput}
          onInputChange={this.setSearchInput}
          onSearchMovies={this.onSearchMovies}
        />
        {this.state.filmList !== null && (
          <FilmList filmList={this.state.filmList} />
        )}
      </>
    );
  }
}

export default MoviesPage;

export const formatFilmListArray = (data) => data.data.results;

export const formatGenresArray = (data) =>
  data.map((data) => data.name).join(' ');

export const formatCastArray = (data) => data.data.cast;

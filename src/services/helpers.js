export const formatApiResponse = (data) => data.data.results;

export const formatGenresArray = (data) =>
  data.map((data) => data.name).join(' ');

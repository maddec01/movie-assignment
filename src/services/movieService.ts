import { MovieResult, MovieError, MovieSearch } from "@/src/domain/movies";

/**
 * Fetch movies by query
 * @param query search term
 * @returns list of movies or error
 * Ideally i would do transform of data here and have a type for my app and another for the endpoint
 * This way I would handle cases like image being 'N/A'
 */
const fetchMovies = async (
  query: string
): Promise<MovieSearch | MovieError> => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&type=movie&s=${query}`
  );

  const data = await res.json();

  if (data?.Response === "True") {
    return {
      Response: true,
      Search: data.Search,
      totalResults: data.totalResults,
    };
  }

  return {
    Response: false,
    Error: data?.Error || "An unknown error occurred",
  };
};

/**
 * Fetch movies by id
 * @param id id of the movie (IMDB)
 * @returns movie details
 * Ideally i would do transform of data here and have a type for my app and another for the endpoint
 */
const fetchMovieById = async (
  id: string
): Promise<MovieResult | MovieError> => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`
  );

  const data = await res.json();

  if (data?.Response === "True") {
    return {
      ...data,
      Response: true,
    };
  }

  return {
    Response: false,
    Error: data?.Error || "An unknown error occurred",
  };
};

const movieService = {
  fetchMovies,
  fetchMovieById,
};

export default movieService;

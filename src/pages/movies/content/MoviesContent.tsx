import { MovieError, MovieSearch } from "@/src/domain/movies";
import MovieList from "@/src/pages/movies/list/MovieList";
import movieService from "@/src/services/movieService";

type ContentProps = {
  query?: string;
};

const MoviesContent = async ({ query = "" }: ContentProps) => {
  let movies: MovieSearch | MovieError | undefined = undefined;

  // Fetch movies only if there's a query
  if (query) {
    movies = await movieService.fetchMovies(query);
  }

  if (!query) {
    // If there's no query, prompt the user to enter one
    return <p>Please enter a search query.</p>;
  } else if (movies?.Response) {
    // If movies are found, display the list
    return <MovieList movies={movies.Search} />;
  } else if (movies?.Error) {
    // If there's an error, display the error message
    return <p>{movies.Error}</p>;
  }
};

export default MoviesContent;

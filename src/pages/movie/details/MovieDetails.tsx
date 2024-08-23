import { MovieResult } from "@/src/domain/movies";

import MovieCard from "@/src/components/MovieCard/MovieCard";

type MovieDetailsProps = {
  movie: MovieResult;
};

const MovieDetails = ({ movie }: MovieDetailsProps) => (
  <MovieCard
    title={movie.Title}
    actors={movie.Actors}
    director={movie.Director}
    image={movie.Poster}
    plot={movie.Plot}
    ratings={movie.Ratings}
    year={movie.Year}
    genre={movie.Genre}
  />
);

export default MovieDetails;

import MovieCardSearch from "@/src/components/MovieCard/MovieCardSearch";
import { MovieSearchItem } from "@/src/domain/movies";
import { SimpleGrid } from "@chakra-ui/react";
import { isEmpty, isNil } from "lodash";

type MovieListProps = {
  movies?: MovieSearchItem[];
};

const MovieList = ({ movies }: MovieListProps) => {
  if (isEmpty(movies) || isNil(movies)) {
    return <p>No movies found.</p>;
  }

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      w="100%"
    >
      {movies.map((movie) => (
        <MovieCardSearch
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          image={movie.Poster}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;

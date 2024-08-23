import PageLayout from "@/src/components/PageLayout";
import MovieDetails from "@/src/pages/movie/details/MovieDetails";
import movieService from "@/src/services/movieService";
import { notFound } from "next/navigation";

type MovieProps = {
  movieId: string;
};

const Movie = async ({ movieId }: MovieProps) => {
  const movie = await movieService.fetchMovieById(movieId);

  if (movie.Response === true) {
    return (
      <PageLayout title={movie.Title}>
        <MovieDetails movie={movie} />
      </PageLayout>
    );
  } else {
    notFound();
  }
};

export default Movie;

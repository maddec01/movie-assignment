import Movie from "@/src/pages/movie/Movie";

type PageProps = {
  params: {
    movieId: string;
  };
};

const Page = ({ params: { movieId } }: PageProps) => (
  <Movie movieId={movieId} />
);

export default Page;

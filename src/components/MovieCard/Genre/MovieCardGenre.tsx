import { Badge } from "@chakra-ui/react";
import { split } from "lodash";

type MovieCardGenreProps = {
  genre: string;
};

const MovieCardGenre = ({ genre }: MovieCardGenreProps) => {
  const genreToArray = split(genre, ",");

  return genreToArray.map((genre) => <Badge key={genre}>{genre}</Badge>);
};

export default MovieCardGenre;

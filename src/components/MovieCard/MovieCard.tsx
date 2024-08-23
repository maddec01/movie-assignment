import { Card, CardBody, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { isNil } from "lodash";
import MovieCardRatings from "@/src/components/MovieCard/Ratings/MovieCardRatings";
import MovieCardInfoText from "@/src/components/MovieCard/Info/MovieCardInfoText";
import MovieCardGenre from "@/src/components/MovieCard/Genre/MovieCardGenre";

// I don't reuse types here because I want components to be independent of context
type MovieCardProps = {
  title: string;
  plot: string;
  image: string;
  ratings: {
    Source: string;
    Value: string;
  }[];
  director: string;
  actors: string;
  year: string;
  genre: string;
};

const MovieCard = ({
  title,
  image,
  ratings,
  plot,
  director,
  actors,
  year,
  genre,
}: MovieCardProps) => (
  <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
  >
    {!isNil(image) && image !== "N/A" && (
      <Image src={image} alt={title} width={300} height={100} />
    )}
    <CardBody>
      <HStack mb={6}>
        <Heading fontSize="2xl">{year}</Heading>
        <MovieCardGenre genre={genre} />
      </HStack>
      <MovieCardRatings ratings={ratings} />
      <MovieCardInfoText label="Plot" text={plot} />
      <MovieCardInfoText label="Director" text={director} />
      <MovieCardInfoText label="Actors" text={actors} />
    </CardBody>
  </Card>
);

export default MovieCard;

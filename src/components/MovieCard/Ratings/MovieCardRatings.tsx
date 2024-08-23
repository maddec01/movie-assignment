import { StatGroup, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

type MovieCardRatingsProps = {
  ratings: {
    Source: string;
    Value: string;
  }[];
};

const MovieCardRatings = ({ ratings }: MovieCardRatingsProps) => (
  <StatGroup mb={6}>
    {ratings.map((rating) => (
      <Stat key={rating.Source}>
        <StatLabel>{rating.Source}</StatLabel>
        <StatNumber>{rating.Value}</StatNumber>
      </Stat>
    ))}
  </StatGroup>
);

export default MovieCardRatings;

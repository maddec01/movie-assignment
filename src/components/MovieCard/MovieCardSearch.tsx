import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { isNil } from "lodash";
import Image from "next/image";
import Link from "next/link";

type MovieCardSearchProps = {
  id: string;
  image: string;
  title: string;
  year: string;
};

const MovieCardSearch = ({ id, image, title, year }: MovieCardSearchProps) => (
  <Link href={`/movie/${id}`}>
    <Card
      cursor="pointer"
      _hover={{
        color: "teal.500",
      }}
      height="100%"
    >
      <CardBody alignItems="center">
        {/* Normaly I would transform the response so I don't need to check for 'N/A' here */}
        {!isNil(image) && image !== "N/A" && (
          <Image src={image} alt={title} width={140} height={100} />
        )}
        <Stack mt="6" spacing="1">
          <Heading size="xs">{title}</Heading>
          <Text fontSize="sm">{year}</Text>
        </Stack>
      </CardBody>
    </Card>
  </Link>
);

export default MovieCardSearch;

import { Heading, Text } from "@chakra-ui/react";

type MovieCardInfoTextProps = {
  label: string;
  text: string;
};

const MovieCardInfoText = ({ label, text }: MovieCardInfoTextProps) => (
  <>
    <Heading size="md">{label}</Heading>
    <Text py="2" fontSize="sm">
      {text}
    </Text>
  </>
);

export default MovieCardInfoText;

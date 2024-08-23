import { VStack, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type PageLayoutProps = {
  title: string;
} & PropsWithChildren;

const PageLayout = ({ title, children }: PageLayoutProps) => (
  <VStack>
    <Heading as="h1" marginY={6}>
      {title}
    </Heading>
    {children}
  </VStack>
);

export default PageLayout;

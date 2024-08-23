"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => (
  <CacheProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </CacheProvider>
);

export default Providers;

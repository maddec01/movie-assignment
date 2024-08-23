import Providers from "@/app/providers";
import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies app - DotControl",
  description: "Assignment by Pedro Gomes",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <Container maxW="6xl">{children}</Container>
      </Providers>
    </body>
  </html>
);

export default RootLayout;

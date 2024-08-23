import PageLayout from "@/src/components/PageLayout";
import MoviesContent from "@/src/pages/movies/content/MoviesContent";
import SearchBar from "@/src/pages/movies/search/SearchBar";
import { Skeleton } from "@chakra-ui/react";
import { Suspense } from "react";

const Movies = ({ searchParams }: { searchParams: { search?: string } }) => (
  <PageLayout title="Movies">
    <SearchBar query={searchParams.search} />
    <Suspense fallback={<Skeleton />}>
      <MoviesContent query={searchParams.search} />
    </Suspense>
  </PageLayout>
);

export default Movies;

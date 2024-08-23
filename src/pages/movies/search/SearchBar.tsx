"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { isEmpty } from "lodash";
import useDebounce from "@/src/hooks/useDebounce";
import { Input } from "@chakra-ui/react";

type SearchBarProps = {
  query?: string;
};

const SearchBar = ({ query = "" }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>(query);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    debouncedSearch(value);
  };

  // Debounced function to perform the search
  const debouncedSearch = useDebounce((searchValue: string) => {
    if (!isEmpty(searchValue)) {
      router.push(`/?search=${searchValue}`);
    } else {
      router.push(`/`);
    }
  }, 600);

  return (
    <Input
      aria-label="movie-search"
      placeholder="Search for a movie"
      size="lg"
      value={searchValue}
      onChange={handleChange}
      marginBottom={4}
    />
  );
};

export default SearchBar;

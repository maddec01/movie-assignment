import MOVIE_MOCK_DATA from "@/test/data/movieData";
import { http, HttpResponse } from "msw";

// Handler for OMDb API search request
const movieSearchRequestHandler = http.get(
  "http://www.omdbapi.com/",
  ({ request }) => {
    const url = new URL(request.url);

    const searchQuery = url.searchParams.get("s");

    if (!searchQuery) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(MOVIE_MOCK_DATA.movieSearch);
  }
);

// Handler for OMDb API search request
const movieByIdRequestHandler = http.get(
  "http://www.omdbapi.com/",
  ({ request }) => {
    const url = new URL(request.url);

    const searchQuery = url.searchParams.get("i");

    if (!searchQuery) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(MOVIE_MOCK_DATA.movieDetails);
  }
);

const HANDLERS = [movieSearchRequestHandler, movieByIdRequestHandler];

export default HANDLERS;

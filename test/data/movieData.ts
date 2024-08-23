import { MovieResult, MovieSearch } from "@/src/domain/movies";

const movieSearch = {
  Search: [
    {
      Title: "Alien",
      Year: "1979",
      imdbID: "tt0078748",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Alien³",
      Year: "1992",
      imdbID: "tt0103644",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTNiYmQzNTctNzAyZC00ODY2LWE3ZjgtODU1NDA0NGI5ZDY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Alien: Covenant",
      Year: "2017",
      imdbID: "tt2316204",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzVkMjRhNzctOGQxMC00OGE2LWJhN2EtNmYyODRiMDNlM2ZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Alien Resurrection",
      Year: "1997",
      imdbID: "tt0118583",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDljNGZkNmItNDlmMi00YzJhLWJiYWUtNGY4OGEwNmY0ODg4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Alien vs. Predator",
      Year: "2004",
      imdbID: "tt0370263",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg",
    },
    {
      Title: "Alien: Romulus",
      Year: "2024",
      imdbID: "tt18412256",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "My Stepmother Is an Alien",
      Year: "1988",
      imdbID: "tt0095687",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzhiMjRlMDEtYzYwNi00MzY5LTlmZDgtOTM2ZDBjN2Y2N2FlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    },
    {
      Title: "Alien Nation",
      Year: "1988",
      imdbID: "tt0094631",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODkwNmNlY2YtY2ZiMS00YjRjLWE5YWEtNjhjMjI1YTY1ZGQxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Alien Raiders",
      Year: "2008",
      imdbID: "tt0996979",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjRkMDY3NDAtYjQ3Zi00ZmJhLWJiOWEtNzc5NTllMjM3ZmY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Alien Abduction",
      Year: "2014",
      imdbID: "tt2510434",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxMjUwMTU1Nl5BMl5BanBnXkFtZTgwOTI4NjMzMTE@._V1_SX300.jpg",
    },
  ],
  totalResults: "894",
  Response: true,
} satisfies MovieSearch;

const movieDetails = {
  Title: "Alien",
  Year: "1979",
  Rated: "R",
  Released: "22 Jun 1979",
  Runtime: "117 min",
  Genre: "Horror, Sci-Fi",
  Director: "Ridley Scott",
  Writer: "Dan O'Bannon, Ronald Shusett",
  Actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
  Plot: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
  Language: "English",
  Country: "United Kingdom, United States",
  Awards: "Won 1 Oscar. 19 wins & 22 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.5/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "93%",
    },
    {
      Source: "Metacritic",
      Value: "89/100",
    },
  ],
  Metascore: "89",
  imdbRating: "8.5",
  imdbVotes: "964,356",
  imdbID: "tt0078748",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "$84,206,106",
  Production: "N/A",
  Website: "N/A",
  Response: true,
} satisfies MovieResult;

const MOVIE_MOCK_DATA = { movieDetails, movieSearch };

export default MOVIE_MOCK_DATA;

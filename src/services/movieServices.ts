import axios from "axios";
import { MovieType, SearchQueryType } from "../types/MovieType";
import { singleMovieType } from "../types/singleMovieType";
import { singleShowType } from "../types/singleShowType";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTQyNmJjZTNkNmZiMjQ3Y2ZmZjFkODIwZTE5Nzk0MSIsInN1YiI6IjY2MzJjM2U1YzM5MjY2MDEyNjZkMzgwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-0yAkOYKesHiEFtcEwXW1uC9vdn0xNaF5BklCmsZ7o";

export async function getTopResults(resultType: string) {
  const data = await axios<{ results: MovieType[] }>(
    `https://api.themoviedb.org/3/${resultType}/top_rated`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return data.data.results;
}

export async function searchQueryService(
  queryType: string,
  searchQuery: string,
  page: number = 1
) {
  const data = await axios<SearchQueryType>(
    `https://api.themoviedb.org/3/search/${queryType}?query=${searchQuery
      .split(" ")
      .join("+")}&page=${page}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  return data.data;
}

export async function getSingleMovie(movieId: string) {
  if (!movieId) return null;

  const data = await axios<singleMovieType>(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  return data.data;
}

export async function getSingleShow(showId: string) {
  if (!showId) return null;
  const data = await axios<singleShowType>(
    `https://api.themoviedb.org/3/tv/${showId}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  return data.data;
}

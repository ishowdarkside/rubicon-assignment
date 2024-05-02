import axios from "axios";
import { MovieType, SearchQueryType } from "../types/MovieType";

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
  searchQuery: string
) {
  const data = await axios<SearchQueryType>(
    `https://api.themoviedb.org/3/search/${queryType}?query=${searchQuery
      .split(" ")
      .join("+")}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  return data.data;
}

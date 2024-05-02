import { useQuery } from "@tanstack/react-query";
import { getTopResults } from "../services/movieServices";

export function useGetTopMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ["top-movies"],
    queryFn: () => getTopResults("movie"),
  });

  return { data, isLoading };
}

export function useGetTopShows() {
  const { data, isLoading } = useQuery({
    queryKey: ["top-shows"],
    queryFn: () => getTopResults("tv"),
  });

  return { data, isLoading };
}

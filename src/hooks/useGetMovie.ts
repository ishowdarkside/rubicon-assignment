import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleMovie, getSingleShow } from "../services/movieServices";

export function useGetMovie() {
  const { movieId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["single-movie"],
    queryFn: () => getSingleMovie(movieId!),
  });

  return { data, isLoading };
}

export function useGetShow() {
  const { showId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["single-show"],
    queryFn: () => getSingleShow(showId!),
  });

  return { data, isLoading };
}

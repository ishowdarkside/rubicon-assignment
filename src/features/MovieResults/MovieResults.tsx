import styles from "./MovieResults.module.scss";
import { useMovieContext } from "../../context/MovieContext";
import { useGetTopMovies, useGetTopShows } from "../../hooks/useGetTopResults";
import MovieComponent from "../../ui/MovieComponent/MovieComponent";
import SkeletonLoading from "../../ui/SkeletonLoading/SkeletonLoading";
import Pagination from "../Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";

export default function MovieResults(): JSX.Element {
  const { selectedResults, searchResponse, isSearching } = useMovieContext();
  const { data: topMovies, isLoading: isLoadingMovies } = useGetTopMovies();
  const { data: topShows, isLoading: isLoadingShows } = useGetTopShows();

  if (isSearching)
    return (
      <div className={styles.movieGrid}>
        <SkeletonLoading />
      </div>
    );

  if (isLoadingMovies || isLoadingShows) return <Spinner />;
  if (!isSearching && searchResponse?.results.length == 0)
    return <h4 className={styles.noResults}>No results found 😢</h4>;

  const top10Results =
    selectedResults === "movie"
      ? topMovies?.slice(0, 10)
      : topShows?.slice(0, 10);

  return (
    <div className={styles.movieGrid}>
      {!searchResponse &&
        top10Results?.map((e) => <MovieComponent result={e} key={e.id} />)}

      {searchResponse && (
        <>
          {searchResponse.results.map((e) => (
            <MovieComponent result={e} key={e.id} />
          ))}
          {searchResponse.total_pages > 1 && <Pagination />}
        </>
      )}
    </div>
  );
}

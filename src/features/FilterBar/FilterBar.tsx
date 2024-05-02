import { useMovieContext } from "../../context/MovieContext";
import Button from "../../ui/Button/Button";
import styles from "./FilterBar.module.scss";

export default function FilterBar(): JSX.Element {
  const { selectedResults, setSelectedResults } = useMovieContext();

  return (
    <div className={styles.filterBar}>
      <Button
        onClick={() => setSelectedResults("tv")}
        isActive={selectedResults === "tv"}
      >
        TV Shows
      </Button>
      <Button
        onClick={() => setSelectedResults("movie")}
        isActive={selectedResults === "movie"}
      >
        Movies
      </Button>
    </div>
  );
}

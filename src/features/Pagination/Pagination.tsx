import { useMovieContext } from "../../context/MovieContext";
import { searchQueryService } from "../../services/movieServices";
import Button from "../../ui/Button/Button";
import styles from "./Pagination.module.scss";

export default function Pagination(): JSX.Element {
  const {
    searchResponse,
    setIsSearching,
    selectedResults,
    searchQuery,
    setSearchResponse,
  } = useMovieContext();

  async function handleClick(pageNum: number) {
    setIsSearching(true);
    const data = await searchQueryService(
      selectedResults,
      searchQuery,
      pageNum
    );
    setSearchResponse(data);
    setIsSearching(false);
  }

  console.log(searchResponse);
  return (
    <div className={styles.paginationBlock}>
      {Array.from({ length: searchResponse?.total_pages || 1 }).map((_, i) => (
        <Button
          onClick={() => handleClick(i + 1)}
          isActive={searchResponse?.page === i + 1}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
}

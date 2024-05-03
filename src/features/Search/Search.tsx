import { useEffect } from "react";
import { useMovieContext } from "../../context/MovieContext";
import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";
import { searchQueryService } from "../../services/movieServices";

export default function Search(): JSX.Element {
  const {
    searchQuery,
    setSearchQuery,
    selectedResults,
    setSearchResponse,
    setIsSearching,
  } = useMovieContext();

  useEffect(() => {
    if (searchQuery.length < 3) return setSearchResponse(null);

    async function searchFnc() {
      const data = await searchQueryService(selectedResults, searchQuery);
      setSearchResponse(data);
      setIsSearching(false);
    }

    setIsSearching(true);
    const timeout = setTimeout(() => {
      searchFnc();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchQuery, selectedResults, setSearchResponse, setIsSearching]);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputWrapper}>
        <CiSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={async (e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

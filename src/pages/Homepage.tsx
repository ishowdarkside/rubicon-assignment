import FilterBar from "../features/FilterBar/FilterBar";
import MovieResults from "../features/MovieResults/MovieResults";
import { getTopResults } from "../services/movieServices";
import Navbar from "../ui/Navbar/Navbar";

export default function Homepage(): JSX.Element {
  getTopResults("tv");
  return (
    <section>
      <div className="container">
        <Navbar />
        <FilterBar />
        <MovieResults />
      </div>
    </section>
  );
}

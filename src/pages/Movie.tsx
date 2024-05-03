import { useNavigate } from "react-router-dom";
import { useGetMovie } from "../hooks/useGetMovie";
import Button from "../ui/Button/Button";
import MovieDetails from "../ui/MovieDetails/MovieDetails";
import Spinner from "../ui/Spinner/Spinner";
import styles from "./Movie.module.scss";

export default function Movie() {
  const { data, isLoading } = useGetMovie();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  console.log(data);
  if (!isLoading && !data)
    return (
      <div className={styles.noResults}>
        <Button onClick={() => navigate("/")}>&larr; Return to homepage</Button>
        <h3>No results found 😭</h3>
      </div>
    );

  return <MovieDetails movie={data!} />;
}

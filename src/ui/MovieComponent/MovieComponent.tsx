import ReactCountryFlag from "react-country-flag";
import { MovieType } from "../../types/MovieType";
import { format } from "date-fns";
import { MdOutlineImageNotSupported } from "react-icons/md";
import styles from "./MovieComponent.module.scss";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../../context/MovieContext";

const API_URL = `https://image.tmdb.org/t/p/w500`;

export default function MovieComponent({ result }: { result: MovieType }) {
  const { selectedResults } = useMovieContext();
  let formatDate;
  if (result.first_air_date || result.release_date)
    formatDate = format(
      new Date(result.release_date || result.first_air_date),
      "MMMM d, yyyy"
    );

  const navigate = useNavigate();
  return (
    <div
      className={styles.movieComponent}
      onClick={() => navigate(`/${selectedResults}/${result.id}`)}
    >
      {!result.backdrop_path && <MdOutlineImageNotSupported />}
      {result.backdrop_path && (
        <img src={`${API_URL}${result.backdrop_path}`} alt="image" />
      )}
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{result.name || result.title}</span>{" "}
        {result.origin_country && (
          <ReactCountryFlag countryCode={result.origin_country[0]} />
        )}
      </div>
      <div className={styles.movieDetails}>
        <span className={styles.rating}>
          <b>&#9733;</b> <span>{result.vote_average.toFixed(1)}</span>
        </span>
        {formatDate && <span className={styles.date}>{formatDate}</span>}
      </div>
    </div>
  );
}

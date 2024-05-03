import { Rating } from "react-simple-star-rating";
import { singleMovieType } from "../../types/singleMovieType";
import styles from "./MovieDetails.module.scss";
import Button from "../Button/Button";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const coverImgPath = "https://image.tmdb.org/t/p/original";

export default function MovieDetails({ movie }: { movie: singleMovieType }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleReturn() {
    navigate(-1);
    queryClient.removeQueries({ queryKey: ["single-movie"] });
  }
  return (
    <section
      style={{ backgroundImage: `url(${coverImgPath}${movie.backdrop_path})` }}
      className={styles.sectionBody}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Button onClick={handleReturn}>&larr; Return back</Button>
        <div className={styles.posterWrapper}>
          <img
            src={`${coverImgPath}${movie.poster_path}`}
            alt="poster"
            className={styles.posterImg}
          />
          {movie.video && (
            <iframe
              width="560"
              height="315"
              src={movie.video as string}
            ></iframe>
          )}
        </div>
        <div className={styles.movieDetails}>
          <span>{movie.runtime}m</span>
          <span>{format(new Date(movie.release_date), "MMMM d, yyyy")}</span>
        </div>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.overview}>{movie.overview}</p>
        <Rating
          readonly={true}
          initialValue={movie.vote_average / 2}
          allowFraction={true}
        />
      </div>
    </section>
  );
}

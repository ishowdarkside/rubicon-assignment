import { Rating } from "react-simple-star-rating";
import styles from "./ShowDetails.module.scss";
import Button from "../Button/Button";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { singleShowType } from "../../types/singleShowType";

const coverImgPath = "https://image.tmdb.org/t/p/original";

export default function ShowDetails({ show }: { show: singleShowType }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleReturn() {
    navigate(-1);
    queryClient.removeQueries({ queryKey: ["single-show"] });
  }
  return (
    <section
      style={{ backgroundImage: `url(${coverImgPath}${show.backdrop_path})` }}
      className={styles.sectionBody}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Button onClick={handleReturn}>&larr; Return back</Button>
        <img
          src={`${coverImgPath}${show.poster_path}`}
          alt="poster"
          className={styles.posterImg}
        />
        <div className={styles.movieDetails}>
          {show.episode_run_time && <span>{show.episode_run_time}m</span>}
          <span>{show.number_of_seasons} seasons</span>
          <span>{show.number_of_episodes} episodes</span>
          <span>{format(new Date(show.first_air_date), "MMMM d, yyyy")}</span>
        </div>
        <h2 className={styles.title}>{show.name}</h2>
        <p className={styles.overview}>{show.overview}</p>
        <Rating
          readonly={true}
          initialValue={show.vote_average / 2}
          allowFraction={true}
        />
      </div>
    </section>
  );
}

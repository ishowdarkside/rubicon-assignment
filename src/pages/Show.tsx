import { useNavigate } from "react-router-dom";
import { useGetShow } from "../hooks/useGetMovie";
import Button from "../ui/Button/Button";
import Spinner from "../ui/Spinner/Spinner";
import styles from "./Movie.module.scss";
import ShowDetails from "../ui/ShowDetails/ShowDetails";

export default function Movie() {
  const { data, isLoading } = useGetShow();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  if (!isLoading && !data)
    return (
      <div className={styles.noResults}>
        <Button onClick={() => navigate("/")}>&larr; Return to homepage</Button>
        <h3>No results found 😭</h3>
      </div>
    );

  return <ShowDetails show={data!} />;
}

import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.scss";
import Button from "../ui/Button/Button";

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={styles.noResults}>
      <Button onClick={() => navigate("/")}>&larr; Return to homepage</Button>
      <h3>Route not found 😭</h3>
    </div>
  );
}

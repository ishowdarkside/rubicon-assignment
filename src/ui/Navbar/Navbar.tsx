import Search from "../../features/Search/Search";
import styles from "./Navbar.module.scss";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h3>findmovie</h3>
        <Search />
      </div>
    </nav>
  );
}

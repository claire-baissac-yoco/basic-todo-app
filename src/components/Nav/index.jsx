import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} to="/todos">
            Todos
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

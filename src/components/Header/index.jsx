import Nav from "../Nav";
import styles from "./Header.module.css";
import { BsCardChecklist } from "react-icons/bs";
import { IconContext } from "react-icons";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <IconContext.Provider value={{ color: "white", size: 70 }}>
          <BsCardChecklist className={styles.imageLogo} />
        </IconContext.Provider>
        <div className={styles.logo}>Todo List</div>
      </div>
      <Nav />
    </div>
  );
}

export default Header;

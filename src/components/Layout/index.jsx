import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

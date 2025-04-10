import styles from "./Home.module.css";
import Header from "../../componentes/Header";
import Main  from "../../componentes/Main";
import Footer from "../../componentes/Footer";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

import styles from "../styles/Main.module.css";

export default function Main() {
    return (
        <div className={styles.quadrado}>
            <div className={styles.column}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
        </div>

            <div className={styles.retangulo}>
                <img src="/donuts.png" alt="Donuts" />
            </div>
        </div>
    );
}
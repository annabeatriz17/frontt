import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Donuts</h1>
        </div>
    );
}
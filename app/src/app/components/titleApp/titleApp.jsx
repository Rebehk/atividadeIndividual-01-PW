import styles from "./style.module.css";

export default function TitleApp() {
  return (
    <div>
      <h1 className={styles.title}>
        Encontre <span>Rebehk</span> no local de partida
      </h1>
      <p className={styles.subtitle}>Chega em 3 minutos (800 metros)</p>
    </div>
  );
}

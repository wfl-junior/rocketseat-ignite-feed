import styles from "./Header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
};

import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div>
      <img src={logo} alt="Logotipo do Ignite Feed" />
      <strong>Ignite Feed</strong>
    </div>
  </header>
);

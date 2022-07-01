import styles from "./Sidebar.module.css";

export const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <img
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      alt="black remote control on red table"
      className={styles.cover}
    />

    <div className={styles.profile}>
      <strong>Wallace Júnior</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">Editar seu perfil</a>
    </footer>
  </aside>
);

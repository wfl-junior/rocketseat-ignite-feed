import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import { Post } from "./Post";

export const App: React.FC = () => (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post />
        <Post />
      </main>
    </div>
  </div>
);

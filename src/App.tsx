import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export const App: React.FC = () => (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post />
      </main>
    </div>
  </div>
);

import { Header } from "./components/Header";
import "./global.css";
import { Post } from "./Post";

export const App: React.FC = () => (
  <div>
    <Header />

    <Post />
    <Post />
  </div>
);

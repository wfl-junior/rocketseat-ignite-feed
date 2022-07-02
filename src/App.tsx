import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import { PostData } from "./types";

const posts: PostData[] = [
  {
    id: 1,
    author: {
      name: "Wallace Júnior",
      role: "Web Developer",
      avatarUrl: "https://github.com/wfl-junior.png",
    },
    publishedAt: new Date("2022-07-01 16:45:00"),
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: 3,
        type: "paragraph",
        content: [
          {
            id: 1,
            content: "👉 ",
          },
          {
            id: 2,
            type: "link",
            content: "jane.design/doctorcare",
          },
        ],
      },
      {
        id: 4,
        type: "paragraph",
        content: [
          {
            id: 1,
            type: "link",
            content: "#novoprojeto",
          },
          {
            id: 2,
            content: " ",
          },
          {
            id: 3,
            type: "link",
            content: "#nlw",
          },
          {
            id: 4,
            content: " ",
          },
          {
            id: 5,
            type: "link",
            content: "#rocketseat",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
      avatarUrl: "https://github.com/diego3g.png",
    },
    publishedAt: new Date("2022-07-01 19:45:00"),
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        id: 3,
        type: "paragraph",
        content: [
          {
            id: 1,
            content: "Acesse e deixe seu feedback 👉 ",
          },
          {
            id: 2,
            type: "link",
            content: "devonlane.design",
          },
        ],
      },
      {
        id: 4,
        type: "paragraph",
        content: [
          {
            id: 1,
            type: "link",
            content: "#uiux",
          },
          {
            id: 2,
            content: " ",
          },
          {
            id: 3,
            type: "link",
            content: "#userexperience",
          },
        ],
      },
    ],
  },
];

export const App: React.FC = () => (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>
  </div>
);

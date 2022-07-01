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
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "paragraph",
        content: [
          {
            content: "👉 ",
          },
          {
            type: "link",
            content: "jane.design/doctorcare",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "link",
            content: "#novoprojeto",
          },
          {
            content: " ",
          },
          {
            type: "link",
            content: "#nlw",
          },
          {
            content: " ",
          },
          {
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
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "paragraph",
        content: [
          {
            content: "Acesse e deixe seu feedback 👉 ",
          },
          {
            type: "link",
            content: "devonlane.design",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "link",
            content: "#uiux",
          },
          {
            content: " ",
          },
          {
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

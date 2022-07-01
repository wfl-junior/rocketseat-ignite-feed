import { PostData } from "../types";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type PostProps = PostData;

export const Post: React.FC<PostProps> = ({ author }) => (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl} />

        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title="1 de julho de 2022 às 16:45" dateTime="2022-07-01 16:45:00">
        Publicado há 1h
      </time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>

      <p>
        👉&nbsp;<a href="#">jane.design/doctorcare</a>
      </p>

      <p>
        <a href="#">#novoprojeto</a>
        &nbsp;
        <a href="#">#nlw</a>
        &nbsp;
        <a href="#">#rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm} onSubmit={e => e.preventDefault()}>
      <strong>Deixe seu feedback</strong>
      <textarea placeholder="Deixe um comentário" />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  </article>
);

import styles from "./Post.module.css";

export const Post: React.FC = () => (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img
          src="https://github.com/wfl-junior.png"
          alt="author"
          className={styles.avatar}
        />

        <div className={styles.authorInfo}>
          <strong>Wallace Júnior</strong>
          <span>Web Developer</span>
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
        <a href="#">👉 jane.design/doctorcare</a>
      </p>

      <p>
        <a href="#">#novoprojeto</a>
        <a href="#">#nlw</a>
        <a href="#">#rocketseat</a>
      </p>
    </div>
  </article>
);

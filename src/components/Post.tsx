import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Fragment } from "react";
import { PostData } from "../types";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type PostProps = PostData;

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {
  const publishedDateTitle = format(
    publishedAt,
    "d 'de' LLLL 'de' yyyy 'às' HH:mm'h",
    { locale: ptBR },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateTitle} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (typeof line.content === "string") {
            return <p key={index}>{line.content}</p>;
          }

          return (
            <p key={index}>
              {line.content.map((text, index) => {
                if (text.type === "link") {
                  return (
                    <a key={index} href="#">
                      {text.content}
                    </a>
                  );
                }

                return <Fragment key={index}>{text.content}</Fragment>;
              })}
            </p>
          );
        })}
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
};

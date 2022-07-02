import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FormEvent, Fragment, useState } from "react";
import { CommentData, PostData } from "../types";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type PostProps = Omit<PostData, "id">;

function* generateId() {
  let id = 1;

  while (true) {
    yield ++id;
  }
}

const idGenerator = generateId();

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState<CommentData[]>([
    {
      id: 1,
      content: "Post muito bacana, hein!?",
    },
  ]);

  const publishedDateTitle = format(
    publishedAt,
    "d 'de' LLLL 'de' yyyy 'às' HH:mm'h",
    { locale: ptBR },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComments(comments => [
      ...comments,
      {
        id: idGenerator.next().value!,
        content: newCommentText,
      },
    ]);

    setNewCommentText("");
  }

  function deleteComment(id: CommentData["id"]) {
    setComments(comments => {
      return comments.filter(comment => comment.id !== id);
    });
  }

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
        {content.map(line => {
          if (typeof line.content === "string") {
            return <p key={line.id}>{line.content}</p>;
          }

          return (
            <p key={line.id}>
              {line.content.map(text => {
                if (text.type === "link") {
                  return (
                    <a key={text.id} href="#">
                      {text.content}
                    </a>
                  );
                }

                return <Fragment key={text.id}>{text.content}</Fragment>;
              })}
            </p>
          );
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={e => setNewCommentText(e.target.value)}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              onDeleteComment={deleteComment}
              {...comment}
            />
          ))}
        </div>
      )}
    </article>
  );
};

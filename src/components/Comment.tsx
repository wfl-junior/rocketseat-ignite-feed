import { ThumbsUp, Trash } from "phosphor-react";
import { Fragment, useState } from "react";
import { CommentData } from "../types";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps extends CommentData {
  onDeleteComment: (id: CommentData["id"]) => void;
}

export const Comment: React.FC<CommentProps> = ({
  id,
  content,
  onDeleteComment,
}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    document.body.style.overflow = "";
    setIsModalOpen(false);
  }

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikeCount(likeCount => likeCount + 1);
  }

  return (
    <Fragment>
      {isModalOpen && (
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <strong>Excluir comentário</strong>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>

            <div>
              <button
                type="button"
                onClick={handleCloseModal}
                className={styles.cancelButton}
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleDeleteComment}
                className={styles.deleteButton}
              >
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.comment}>
        <Avatar src="https://github.com/wfl-junior.png" hasBorder={false} />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Wallace Júnior</strong>

                <time
                  title="1 de julho de 2022 às 16:45"
                  dateTime="2022-07-01 16:45:00"
                >
                  Cerca de 2h atrás
                </time>
              </div>

              <button
                type="button"
                title="Deletar comentário"
                onClick={handleOpenModal}
              >
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button type="button" onClick={handleLikeComment}>
              <ThumbsUp weight="bold" />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

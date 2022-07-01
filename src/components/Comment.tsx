import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment: React.FC = () => (
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

          <button type="button" title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>

        <p>Muito bom Devon, parabéns!! 👏👏</p>
      </div>

      <footer>
        <button>
          <ThumbsUp weight="bold" />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </div>
);

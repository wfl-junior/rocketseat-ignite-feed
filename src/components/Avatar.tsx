import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

function classNames(...classes: string[]) {
  return classes.join(" ");
}

export const Avatar: React.FC<AvatarProps> = ({ src, hasBorder = true }) => (
  <img
    src={src}
    alt="user avatar"
    className={
      hasBorder
        ? classNames(styles.avatar, styles.avatarWithBorder)
        : styles.avatar
    }
  />
);

import styles from "./Button.module.scss";

interface propTypes {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export default function Button({
  children,
  onClick,
  isActive,
}: propTypes): JSX.Element {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

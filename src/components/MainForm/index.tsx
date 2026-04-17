import styles from "./styles.module.css";

type Props = {
  children: any;
};

export function MainForm({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
import styles from "./styles.module.css";

type Props = {
  children: any;
};

export function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
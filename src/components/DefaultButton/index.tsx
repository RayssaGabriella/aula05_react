import styles from "./styles.module.css";

type Props = {
  children: any;
};

export function DefaultButton({ children }: Props) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}
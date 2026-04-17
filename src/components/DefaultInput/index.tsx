import styles from "./styles.module.css";

type Props = {
  type: string;
  placeholder: string;
  icon: any;
};

export function DefaultInput({ type, placeholder, icon: Icon }: Props) {
  return (
    <div className={styles.inputContainer}>
      <Icon size="1.25rem" />

      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
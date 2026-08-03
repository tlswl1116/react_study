import { memo, useMemo } from "react";
import styles from "./Buttons.module.scss";
import styles2 from "./Buttons2.module.scss";

const Button = memo(({ text, onClick }: { text: string; onClick: () => void }) => {
  const result = useMemo(() => caculating(), []);

  return <button onClick={onClick} className={styles.button}>{`${text} ${result}`}</button>;
});

const ButtonSub = memo(({ text, onClick }: { text: string; onClick: () => void }) => {
  const result = useMemo(() => caculating(), []);

  return <button onClick={onClick} className={styles2.button}>{`${text} ${result}`}</button>;
});

const caculating = () => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  return 10;
};

export { Button, ButtonSub };

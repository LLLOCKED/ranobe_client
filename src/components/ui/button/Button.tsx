import { FC } from 'react';

import styles from './Button.module.scss';

interface IButton {
  title: string;
  click: () => void;
}

const Button: FC<IButton> = ({ title, click }) => {
  return <button className={styles.button} onClick={click}>{title}</button>;
};

export default Button;

import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type Props = {
  children: string | ReactNode;
  className: string;
  onClickFunction?: () => void;
};

const Button: React.FC<Props> = ({ children, className, onClickFunction }) => {
  const buttonClasses = classNames(styles[className], styles.button);

  return (
    <button onClick={onClickFunction} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;

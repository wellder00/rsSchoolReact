import { Component } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type Props = {
  children: string;
  className: string;
  onClickFunction: () => void;
};

class Button extends Component<Props> {
  render() {
    const buttonClasses = classNames(styles[this.props.className], styles.button);
    return (
      <button onClick={this.props.onClickFunction} className={buttonClasses}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

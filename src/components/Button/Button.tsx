import { Component } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = {
  children: string;
  className: string;
  getInputValue: () => void;
};

class Button extends Component<Props> {
  render() {
    const buttonClasses = classNames(styles[this.props.className], styles.button);
    return (
      <button onClick={this.props.getInputValue} className={buttonClasses}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import styles from './InputSearch.module.scss';

type Props = {
  placeholder: string;
  className: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getInputValue: () => void;
};

class InputSearch extends Component<Props> {
  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.props.getInputValue();
    }
  };

  render() {
    return (
      <input
        className={styles[this.props.className]}
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default InputSearch;

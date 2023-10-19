import { Component } from 'react';

import styles from './InputSearch.module.scss';

type Props = {
  placeholder: string;
  className: string;
};

class InputSearch extends Component<Props> {
  render() {
    return (
      <input
        className={styles[this.props.className]}
        type="text"
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default InputSearch;

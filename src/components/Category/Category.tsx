import React, { Component } from 'react';

import styles from './Category.module.scss';

import { category } from '../../utils/constants/constants';

type Props = {
  onCategoryChange: (selectedCategory: string) => void;
};

class Category extends Component<Props> {
  state = {
    selectedCategory: category[0],
  };

  handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value;
    this.setState({ selectedCategory });
    this.props.onCategoryChange(selectedCategory);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {category.map((resource) => (
          <label
            className={`${styles.label} ${
              this.state.selectedCategory === resource ? styles.active : ''
            }`}
            key={resource}
          >
            <input
              className={styles.checker}
              type="radio"
              value={resource}
              checked={this.state.selectedCategory === resource}
              onChange={this.handleCategoryChange}
            />
            {resource}
          </label>
        ))}
      </div>
    );
  }
}

export default Category;

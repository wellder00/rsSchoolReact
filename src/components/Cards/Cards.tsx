import { useAppSelector } from '../../Hooks/reduxHooks';
import styles from './Cards.module.scss';

const Cards = () => {
  const formDataList = useAppSelector((state) => state.dataForm.forms);

  return (
    <div className={styles.previewWrapper}>
      {formDataList.map(({ name, email, age, gender, password, country, image }, index) => (
        <div
          className={`${styles.previewCard} ${
            index === formDataList.length - 1 && styles.animation
          }`}
          key={`${index}${password}`}
        >
          <span>Name: {name}</span>
          <span>Email: {email}</span>
          <span>Age: {age}</span>
          <span>Gender: {gender}</span>
          <span>Password: {password}</span>
          <span>Country: {country}</span>
          {image && <img className={styles.previewImage} src={image} alt={name} />}
        </div>
      ))}
    </div>
  );
};

export default Cards;

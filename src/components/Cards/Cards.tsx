import { useAppSelector } from '../../Hooks/reduxHooks';
import styles from './Cards.module.scss';

const Cards = () => {
  const formDataList = useAppSelector((state) => state.dataForm.forms);

  return (
    <div className={styles.previewWrapper}>
      {formDataList.map((formData, index) => (
        <div
          className={`${styles.previewCard} ${
            index === formDataList.length - 1 ? styles.animation : ''
          }`}
          key={formData.password}
        >
          <span>Name: {formData.name}</span>
          <span>Email: {formData.email}</span>
          <span>Age: {formData.age}</span>
          <span>Gender: {formData.gender}</span>
          <span>Password: {formData.password}</span>
          <span>Country: {formData.country}</span>
          <img
            className={styles.previewImage}
            src={formData.image ? formData.image : ''}
            alt={formData.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;

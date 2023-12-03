import { CountryList } from '@components/CountryList';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { useAppDispatch } from '../../Hooks/reduxHooks';
import { addFormData } from '../../store/dataFormSlice';
import { convertJpegPng } from '../../utils/convertor64';
import { verificationPassword } from '../../utils/validatePassword';
import { schemaValidate } from '../../utils/validation/validate';

const UnControlledForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formRef = useRef(null);
  const [verification, setVerification] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const password = event.target.value;
    const strength = verificationPassword(password);
    setVerification(strength);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const dataForm = formRef.current;
    if (!dataForm) {
      return;
    }
    const formData = new FormData(dataForm);

    try {
      const data = {
        name: formData.get('name'),
        age: Number(formData.get('age')),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmpassword: formData.get('confirmpassword'),
        checkbox: !!formData.get('checkbox'),
        gender: formData.get('gender'),
        image: [formData.get('image') as File],
        country: formData.get('country'),
      };

      const validateData = await schemaValidate.validate(data, {
        abortEarly: false,
      });
      const pictureFile = formData.get('image') as File;
      const image64 = pictureFile ? await convertJpegPng(pictureFile) : null;
      const resultData = { ...validateData, image: image64 };
      dispatch(addFormData(resultData));
      navigate('/');
    } catch (error) {
      const validationErrors: Record<string, string> = {};
      if (error instanceof ValidationError) {
        error.inner.forEach((e) => {
          if (e.path) validationErrors[e.path] = e.message;
        });
      }
      setErrors(validationErrors);
    }
  };

  return (
    <div className="custom-form-wrapper">
      <form className="custom-form-container" onSubmit={handleSubmit} ref={formRef}>
        <div className="input-wrapper">
          <label htmlFor="custom-name" className="custom-form-label">
            Your Name:
          </label>
          <input id="custom-name" className="custom-form-input" name="name" />
          {errors.name && <p className="custom-form-error">{errors.name}</p>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="custom-age" className="custom-form-label">
            Your Age:
          </label>
          <input name="age" id="custom-age" type="number" className="custom-form-input" />
          {errors.age && <p className="custom-form-error">{errors.age}</p>}
        </div>

        <div className="input-wrapper">
          <div className="custom-input-field">
            <label htmlFor="custom-email" className="custom-form-label">
              Your Email:
            </label>
            <input name="email" id="custom-email" className="custom-form-input" />
            {errors.email && <p className="custom-form-error">{errors.email}</p>}
          </div>
        </div>

        <div className="input-wrapper">
          <div className="custom-input-group">
            <div className="custom-input-field">
              <label htmlFor="custom-password" className="custom-form-label">
                Password:
              </label>
              <input
                name="password"
                onChange={handlePasswordChange}
                id="custom-password"
                className="custom-form-input"
              />
              {errors.password && <p className="custom-form-error">{errors.password}</p>}
            </div>
          </div>

          <div className="field-strength">Strength: {verification}</div>
          {verification >= 4 ? (
            <div className="strong">Password meets strength criteria!</div>
          ) : (
            <div className="not-strong">Password does not meet the strength criteria.</div>
          )}

          <div className="input-wrapper">
            <div className="custom-input-field">
              <label htmlFor="custom-confirmpassword" className="custom-form-label">
                Confirm Password:
              </label>
              <input
                name="confirmpassword"
                id="custom-confirmpassword"
                className="custom-form-input"
              />
              {errors.confirmpassword && (
                <p className="custom-form-error">{errors.confirmpassword}</p>
              )}
            </div>
          </div>
        </div>

        <div className="input-wrapper">
          <CountryList error={errors.country} />
        </div>

        <div className="input-wrapper">
          <div className="custom-input-field custom-input-field__gender">
            <label className="custom-form-label gender-label">Your Gender:</label>
            <div>
              <input name="gender" type="radio" id="custom-male" value="male" defaultChecked />
              <label className="custom-form-gender gender" htmlFor="custom-male">
                Male
              </label>

              <input name="gender" type="radio" id="custom-female" value="female" />
              <label className="custom-form-gender gender" htmlFor="custom-female">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="input-wrapper">
          <div className="custom-input-field">
            <label htmlFor="custom-picture" className="custom-form-label">
              Upload Picture:
            </label>
            <input name="image" id="custom-picture" className="custom-form-input" type="file" />
            {errors.image && <p className="custom-form-error">{errors.image}</p>}
          </div>
        </div>

        <div className="input-wrapper">
          <div className="custom-check-box-wrapper checkbox-wrapper">
            <input name="checkbox" id="custom-forms-checkbox" className="checker" type="checkbox" />
            <label
              htmlFor="custom-forms-checkbox"
              className="custom-form-label custom-checker-label label-checker"
            >
              Do you confirm the terms?
            </label>
          </div>
          {errors.checkbox && <p className="checkbox-error">{errors.checkbox}</p>}
        </div>

        <input className="custom-form-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default UnControlledForm;

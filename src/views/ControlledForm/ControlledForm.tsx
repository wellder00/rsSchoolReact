import { CountryList } from '@components/CountryList';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../Hooks/reduxHooks';
import { addFormData } from '../../store/dataFormSlice';
import Routes from '../../utils/constants/routes';
import { convertJpegPng } from '../../utils/convertor64';
import { verificationPassword } from '../../utils/validatePassword';
import { TypesForm, schemaValidate } from '../../utils/validation/validate';

const ControlledForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<TypesForm>({ mode: 'onChange', resolver: yupResolver(schemaValidate) });

  const onSubmit = async (data: TypesForm) => {
    if (data.image !== undefined) {
      const image = data.image as FileList;
      const image64 = await convertJpegPng(image[0]);
      const result = { ...data, image: image64 };
      dispatch(addFormData(result));
      navigate(Routes.HOME);
    }
  };
  const watchPassword = watch().password;
  const watcherPassword = verificationPassword(watchPassword);

  return (
    <div className="custom-form-wrapper">
      <form className="custom-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="custom-name" className="custom-form-label">
            Your Name:
          </label>
          <input id="custom-name" className="custom-form-input" {...register('name')} />
          {errors.name && <p className="custom-form-error">{errors.name.message}</p>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="custom-age" className="custom-form-label">
            Your Age:
          </label>
          <input id="custom-age" type="number" className="custom-form-input" {...register('age')} />
          {errors.age && <p className="custom-form-error">{errors.age.message}</p>}
        </div>

        <div className="input-wrapper">
          <div className="custom-input-field">
            <label htmlFor="custom-email" className="custom-form-label">
              Your Email:
            </label>
            <input id="custom-email" className="custom-form-input" {...register('email')} />
            {errors.email && <p className="custom-form-error">{errors.email.message}</p>}
          </div>
        </div>

        <div className="input-wrapper">
          <div className="custom-input-group">
            <div className="custom-input-field">
              <label htmlFor="custom-password" className="custom-form-label">
                Password:
              </label>
              <input
                type="password"
                id="custom-password"
                className="custom-form-input"
                {...register('password')}
              />
              {errors.password && <p className="custom-form-error">{errors.password.message}</p>}
            </div>
          </div>

          <div className="field-strength">Strength: {watcherPassword}</div>
          {watcherPassword >= 4 ? (
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
                type="password"
                id="custom-confirmpassword"
                className="custom-form-input"
                {...register('confirmpassword')}
              />
              {errors.confirmpassword && (
                <p className="custom-form-error">{errors.confirmpassword.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="input-wrapper">
          <CountryList {...register('country')} />
        </div>

        <div className="input-wrapper">
          <div className="custom-input-field custom-input-field__gender">
            <label className="custom-form-label gender-label">Your Gender:</label>
            <div>
              <input type="radio" id="custom-male" value="male" checked {...register('gender')} />
              <label className="custom-form-gender gender" htmlFor="custom-male">
                Male
              </label>

              <input type="radio" id="custom-female" value="female" {...register('gender')} />
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
            <input
              id="custom-picture"
              className="custom-form-input"
              {...register('image')}
              type="file"
            />
            {errors.image && <p className="custom-form-error">{errors.image.message}</p>}
          </div>
        </div>

        <div className="input-wrapper">
          <div className="custom-check-box-wrapper checkbox-wrapper">
            <input
              id="custom-forms-checkbox"
              className="checker"
              {...register('checkbox')}
              type="checkbox"
            />
            <label
              htmlFor="custom-forms-checkbox"
              className="custom-form-label custom-checker-label label-checker"
            >
              Do you confirm the terms?
            </label>
          </div>
        </div>

        <input
          className={`custom-form-submit ${!isValid ? 'custom-disabled-btn' : ''}`}
          type="submit"
          value="SUBMIT"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default ControlledForm;

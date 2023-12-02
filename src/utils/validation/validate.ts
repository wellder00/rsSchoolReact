import * as yup from 'yup';

export interface TypesForm extends yup.InferType<typeof schemaValidate> {}

export const schemaValidate = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .matches(
      /^[A-Z][a-z]*$/,
      'Name should start with an uppercase letter and contain only letters'
    ),
  age: yup.number().required('Please enter your age').positive('Age should be a positive number'),
  email: yup.string().required('Please enter your email').email('Invalid email format'),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d])/,
      'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character'
    ),
  confirmpassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  checkbox: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  gender: yup.string().default('male'),
  image: yup
    .mixed()
    .test('fileSize', 'File size exceeds the limit (1 MB)', (value) => {
      const fileList = value as FileList;
      return fileList && fileList[0] && fileList[0].size <= 1024 * 1024;
    })
    .test('fileType', 'Invalid file type. Only PNG and JPEG are allowed', (value) => {
      const fileList = value as FileList;
      return fileList && fileList[0] && ['image/png', 'image/jpeg'].includes(fileList[0].type);
    }),
  // country: yup.string().required('Please select your country'),
});


import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number()
    .typeError('Age must be a number')
    .min(0, 'Age cannot be negative')
    .max(120, 'Age cannot exceed 120')
    .required('Age is required'),
  role: yup.string().required('Role is required'),
});
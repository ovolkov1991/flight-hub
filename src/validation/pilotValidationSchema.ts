import * as yup from 'yup';

const pilotValidationSchema = yup.object().shape({
  pilotName: yup
    .string()
    .required('Pilot Name is required')
    .min(5, 'Pilot Name should be at least 5 characters'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(
      /^\+?[1-9]\d{0,2}[\s-]?(\(?\d{2,4}\)?)?[\s-]?\d{3,4}[\s-]?\d{3,4}$/,
      'Invalid phone format'
    ),
  email: yup.string().required('Email is required').email('Invalid email'),
  street: yup.string().required('Street Address is required'),
  zipCode: yup
    .string()
    .required('Zip Code is required')
    .matches(/^\w{3,}$/, 'Invalid Zip Code'),
  operatorNumber: yup.string().required('Operator Number is required'),
  description: yup
    .string()
    .required('Description is required')
    .min(100, 'Description should be at least 100 characters long'),
});

export default pilotValidationSchema;

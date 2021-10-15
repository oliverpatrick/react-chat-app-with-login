import { SetStateAction } from 'react';

export default function validate(values): SetStateAction<{
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}> {
  let errors = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    termsAndConditions: '',
  };

  if (!values.username.trim()) {
    errors.username = 'Username required.';
  } else if (values.username.length < 3) {
    errors.username = 'Username must be more than 3 characters long.';
  }

  if (!values.email) {
    errors.email = 'Email required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid.';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password,
    )
  ) {
    errors.password =
      'Password must contain 1 capital letter and special character.';
  }

  if (
    values.password !== values.passwordConfirm ||
    values.passwordConfirm !== values.password
  ) {
    errors.passwordConfirm = 'Passwords do not match';
  }

  if (!values.termsAndConditions) {
    errors.termsAndConditions = 'Please agree to the terms and conditons';
  }

  return errors;
}

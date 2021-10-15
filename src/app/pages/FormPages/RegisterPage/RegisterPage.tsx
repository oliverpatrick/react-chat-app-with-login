import React, { ReactElement } from 'react';
import useForm from 'lib/hooks/useForm';
import validate from 'lib/validate/validate';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

import {
  FormPageContainer,
  FormPageLayout,
  InlineContainer,
  RememberMe,
} from '../FormPageContainer';

const errorStyle = {
  color: 'red',
  margin: 0,
};

function RegisterPage({ submitForm }): ReactElement {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <FormPageLayout>
      <FormPageContainer>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          ></input>
          {errors.username && <p style={errorStyle}>{errors.username}</p>}
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
          <label>Confirm Password</label>
          <input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            value={values.passwordConfirm}
            onChange={handleChange}
          ></input>
          {errors.passwordConfirm && (
            <p style={errorStyle}>{errors.passwordConfirm}</p>
          )}

          <Link to={''}>
            <button onClick={handleSubmit}>Register</button>
          </Link>
          <InlineContainer>
            <RememberMe>
              <label style={{ padding: 0 }} htmlFor="termsAndConditions">
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  checked={values.termsAndConditions}
                  onChange={handleChange}
                ></input>
                I accept the{' '}
                <span>
                  <Link to="/hello">Terms of Use</Link>
                </span>{' '}
                &{' '}
                <span>
                  <Link to="/hello">Privacy Policy.</Link>
                </span>
              </label>
            </RememberMe>
          </InlineContainer>
          {errors.termsAndConditions && (
            <p style={errorStyle}>{errors.termsAndConditions}</p>
          )}
        </form>
      </FormPageContainer>
    </FormPageLayout>
  );
}

export default RegisterPage;

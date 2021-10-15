import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import {
  InlineContainer,
  FormPageLayout,
  FormPageContainer,
  PasswordMemory,
} from '../FormPageContainer';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [channel, setChannel] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleRememberPassword = e => {
    setRememberPassword(!rememberPassword);

    //save email to cookies
  };

  return (
    <>
      <Helmet>
        <title>Sign up</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <FormPageLayout>
        <FormPageContainer>
          <h1>Login</h1>
          <form onSubmit={undefined} noValidate>
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              placeholder="Email Address"
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={channel}
              onChange={e => setChannel(e.target.value)}
            ></input>
            <InlineContainer>
              <PasswordMemory>
                <label htmlFor="passwordMemory">
                  <input
                    type="checkbox"
                    name="passwordMemory"
                    checked={rememberPassword}
                    onChange={handleRememberPassword}
                  ></input>
                  Remember Me
                </label>
              </PasswordMemory>
              <Link to="/reset-password">
                <p>Forgot password?</p>
              </Link>
            </InlineContainer>

            <Link to={`/chat/${channel}/${username}`}>
              <button onClick={undefined}>Sign In</button>
            </Link>
          </form>
          <p>
            Haven't got an account?{' '}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </FormPageContainer>
      </FormPageLayout>
    </>
  );
}

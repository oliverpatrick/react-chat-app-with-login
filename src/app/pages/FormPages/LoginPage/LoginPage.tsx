import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  InlineContainer,
  FormPageLayout,
  FormPageContainer,
  UserMemory,
} from '../FormPageContainer';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) history.replace('/');
  }, [user, loading]);

  const handleRememberUser = e => {
    setRememberUser(!rememberUser);

    //save email to cookies
    if (!rememberUser) {
      localStorage.removeItem('email');
    } else if (rememberUser) {
      localStorage.setItem('email', email);
    }
  };

  console.log(user);

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
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            <InlineContainer>
              <UserMemory>
                <label htmlFor="userMemory">
                  <input
                    type="checkbox"
                    name="userMemory"
                    checked={rememberUser}
                    onChange={handleRememberUser}
                  ></input>
                  Remember Me
                </label>
              </UserMemory>
              <Link to="/reset-password">
                <p>Forgot password?</p>
              </Link>
            </InlineContainer>

            <Link to={`/`}>
              <button
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Sign In
              </button>
            </Link>
            <Link to={`/`}>
              <button onClick={() => signInWithGoogle()}>Google</button>
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

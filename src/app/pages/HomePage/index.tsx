// import Alert from 'app/components/Alert/Alert';
// import * as React from 'react';
// import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// import {
//   InlineContainer,
//   FormPageLayout,
//   FormPageContainer,
// } from '../FormPages/FormPageContainer';

export function HomePage() {
  // const [username, setUsername] = useState('');
  // const [channel, setChannel] = useState('');
  // const [alert, setAlert] = useState(false);

  // const sendData = () => {
  //   if (username !== '' && channel !== '') {
  //     socket.emit('joinRoom', { username, channel });
  //   } else {
  //     setAlert(true);
  //     window.location.reload();
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      Home Page
      {/* <FormPageLayout>
        <FormPageContainer>
          <h1>Login</h1>
          <input
            placeholder="Email Address"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={channel}
            onChange={e => setChannel(e.target.value)}
          ></input>
          <InlineContainer>
            <div>
              <input type="checkbox"></input>
              <label>Remember Me</label>
            </div>
            <Link to="">
              <p>Forgot password?</p>
            </Link>
          </InlineContainer>

          <Link to={`/chat/${channel}/${username}`}>
            <button onClick={undefined}>Sign In</button>
          </Link>
          <p>
            Haven't got an account?{' '}
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </FormPageContainer> */}
      {/* </FormPageLayout> */}
    </>
  );
}

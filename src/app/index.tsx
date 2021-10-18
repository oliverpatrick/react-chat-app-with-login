/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import 'firebase/firestore';
import { auth } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

import { io } from 'socket.io-client';

import { useTranslation } from 'react-i18next';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import RegisterPage from './pages/FormPages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/FormPages/LoginPage/LoginPage';
import { ChatPage } from './pages/ChatPage';
import ConversationsPage from './pages/MessengerPage/MessengerPage';
import ForgottenPasswordPage from './pages/FormPages/ForgottenPasswordPage/ForgottenPasswordPage';

const socket = io('/');

export function App() {
  const { i18n } = useTranslation();
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/">
          {user ? <HomePage /> : <Route component={LoginPage} />}
        </Route>
        <Route path="/chats">
          <ChatPage socket={socket} />
        </Route>
        <Route path="/conversations" component={ConversationsPage} />
        <Route path="/signin">
          {user ? <Redirect to="/" /> : <Route component={LoginPage} />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Route component={RegisterPage} />}
        </Route>
        <Route path="/reset-password" component={ForgottenPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

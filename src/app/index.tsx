/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
// import { ChatPage } from './pages/ChatPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { io } from 'socket.io-client';
import RegisterPage from './pages/FormPages/RegisterPage/RegisterPage';
import { LoginPage } from './pages/FormPages/LoginPage/LoginPage';
import { ChatPage } from './pages/ChatPage';
import ConversationsPage from './pages/ConversationsPage/ConversationsPage';
import ForgottenPasswordPage from './pages/FormPages/ForgottenPasswordPage/ForgottenPasswordPage';
const socket = io('/');

export function App() {
  const { i18n } = useTranslation();
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
          <HomePage />
        </Route>
        <Route path="/chats">
          {/* <Route path="/chat/:channel/:username"> */}
          <ChatPage socket={socket} />
        </Route>
        <Route path="/conversations" component={ConversationsPage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/reset-password" component={ForgottenPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

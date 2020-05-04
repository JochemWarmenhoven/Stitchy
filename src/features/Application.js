import { Router } from '@reach/router';
import React from 'react';
import PasswordReset from './auth/PasswordReset';
import ProfilePage from './auth/ProfilePage';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { UserContext } from './providers/UserProvider';
function Application() {
  return (
    <UserContext.Consumer>
      {(user) =>
        user ? (
          <ProfilePage />
        ) : (
          <Router>
            <SignUp path="signup" />
            <SignIn path="/" />
            <PasswordReset path="passwordReset" />
          </Router>
        )
      }
    </UserContext.Consumer>
  );
}
export default Application;

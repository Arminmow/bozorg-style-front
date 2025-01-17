import React from 'react';

const ShowForLoggedIn = ({ user, children }) => {
    const content = React.Children.toArray(children);
  
    const loggedInContent = content.find((child) => child.type === LoggedIn);
    const fallbackContent = content.find((child) => child.type === NotLoggedIn);
  
    return user ? loggedInContent : fallbackContent;
  };
  
  const LoggedIn = ({ children }) => <>{children}</>;
  const NotLoggedIn = ({ children }) => <>{children}</>;
  
  export { ShowForLoggedIn, LoggedIn, NotLoggedIn };
  
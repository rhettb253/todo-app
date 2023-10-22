import { useContext } from "react";
import { LoginContext } from "./context.jsx";

const Auth = (props) => {
  const context = useContext(LoginContext);
  const isLoggedIn = context.loggedIn;

  const capability = () => {
    if (context.user.capabilities.includes('delete')) return 'admin';
    if (context.user.capabilities.includes('update')) return 'editor';
    if (context.user.capabilities.includes('create')) return 'writer';
    if (context.user.capabilities.includes('read')) return 'user';
  }

  const access = capability();

  return (
    <>
      {props.children}
        {/* {isLoggedIn && access === 'admin' && <p>admin</p>}
        {isLoggedIn && access === 'editor' && <p>editor</p>}
        {isLoggedIn && access === 'writer' && <p>writer</p>}
        {isLoggedIn && access === 'user' && <p>user</p>} */}
    </>
    );
};

export default Auth;
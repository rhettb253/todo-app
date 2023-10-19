import { useContext, useState } from "react";
import { LoginContext } from "./context.jsx";

import Auth from "./auth.jsx";

const Login = () => {
  const context = useContext(LoginContext);
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(state.username, state.password);
  };

  return (
    <>
      {context.loggedIn &&
      <div>
        <button id='log' onClick={context.logout}>Log Out</button><Auth />
        </div>}
      

      {!context.loggedIn &&
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button id='log'>Login</button> 
        </form>
      }
    </>
  );
};

export default Login;
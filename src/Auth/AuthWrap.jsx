import { useContext } from "react";
import { If, Then, Else } from "react-if";

import { LoginContext } from "./LoginProvider.jsx";
import { Button } from "@mui/material";

const Auth = (props) => {
  const context = useContext(LoginContext);
  const isLoggedIn = context.loggedIn;
  const canDo = props.capability ? context.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;

  return (
    <If condition={okToRender}>
        <Then> 
            {props.children}
        </Then>
        <Else>
            <Button variant='outlined' color='warning'>Access Denied</Button>
        </Else>
    </If>
  )
};

export default Auth;
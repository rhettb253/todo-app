import { useContext } from "react";
import { Context } from "../Todo";
import { Button } from "@mui/material";
import LoginProvider from "../auth/context";
import Login from "../auth/login";

function Header() {
  const { setShowAddJobOrSettings } = useContext(Context);

  return (
    <header data-testid="todo-header">
      <div>
        <Button
          color="inherit"
          onClick={() => setShowAddJobOrSettings("addJob")}
        >
          Add Job
        </Button>
        <Button
          color="inherit"
          onClick={() => setShowAddJobOrSettings("settings")}
        >
          Settings
        </Button>
      </div>
        <LoginProvider>
          <Login />
        </LoginProvider>
    </header>
  );
}

export default Header;

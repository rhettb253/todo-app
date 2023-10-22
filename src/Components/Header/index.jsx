import {useContext} from 'react';
import { Context } from '../Todo';
import { Button } from '@mui/material';
import Login from '../../Auth/Login';

function Header() {
  const {incomplete, setShowAddJobOrSettings } = useContext(Context);

  return (
    <header data-testid="todo-header">
      <div>

      <Button color='inherit' onClick={() => setShowAddJobOrSettings('addJob')}>Add Job</Button>
      <Button color='inherit' onClick={() => setShowAddJobOrSettings('settings')}>Settings</Button>
      <Login />

      </div>
        <LoginProvider>
          <Login />
        </LoginProvider>
    </header>
  );
}

export default Header;

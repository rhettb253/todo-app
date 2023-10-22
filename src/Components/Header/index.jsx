import {useContext} from 'react';
import { Context } from '../Todo';
import { Button } from '@mui/material';
import Login from '../../Auth/Login';

function Header() {
  const {incomplete, setShowAddJobOrSettings } = useContext(Context);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: <span className='pending'>{incomplete} items pending</span></h1>
      <div>
      <Button color='inherit' onClick={() => setShowAddJobOrSettings('addJob')}>Add Job</Button>
      <Button color='inherit' onClick={() => setShowAddJobOrSettings('settings')}>Settings</Button>
      <Login />
      </div>
    </header>
  );
}

export default Header;

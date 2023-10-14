import {useContext} from 'react';
import { Context } from '../Todo';
import { Button } from '@mui/material';

function Header() {
  const {incomplete} = useContext(Context);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: <span className='pending'>{incomplete} items pending</span></h1>
      <div>
      <Button color='inherit'>Add Job</Button>
      <Button color='inherit'>Settings</Button>
      </div>
    </header>
  );
}

export default Header;

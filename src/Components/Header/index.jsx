import {useContext} from 'react';
import { Context } from '../Todo';

function Header() {
  const {incomplete} = useContext(Context);

  return (
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: <span className='pending'>{incomplete} items pending</span></h1>
    </header>
  );
}

export default Header;

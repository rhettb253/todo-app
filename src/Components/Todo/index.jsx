import { useEffect, useState, createContext } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import Header from '../Header';
import Form from '../Form';
import FullList from '../FullList';
import Settings from '../Settings';
import './Todo.scss';

export const Context = createContext(null);

const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [showFullList, setShowFullList] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showAddJobOrSettings, setShowAddJobOrSettings] = useState('addJob');
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  function toggleList() {
    setShowFullList(!showFullList);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <Context.Provider value={{setShowComplete, toggleList, setShowAddJobOrSettings, incomplete, list, toggleComplete, handleChange, handleSubmit, defaultValues, showComplete, showFullList}}>
      <Header />
      <div className='body'>
        {showAddJobOrSettings === 'addJob' && <Form />}
        {showAddJobOrSettings === 'settings' && <Settings />}
        <div className='rightside'>
          <div className='buttons'>
          </div>
          <FullList />
        </div>
      </div>
    </Context.Provider>
  );
};

export default Todo;

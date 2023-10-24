import { useEffect, useState, createContext } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import Header from '../Header';
import Form from '../Form';
import FullList from '../FullList';
import Settings from '../Settings';
import './Todo.scss';
import axios from 'axios';

export const Context = createContext(null);

const Todo = () => {
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState(() => {
    // getting stored value
    const savedList = localStorage.getItem("list");
    const initialValue = JSON.parse(savedList);
    return initialValue || [];
  });
  const [incomplete, setIncomplete] = useState([]);
  const [showFullList, setShowFullList] = useState(() => {
    // getting stored value
    const savedShowFullList = localStorage.getItem("showFullList");
    const initialValue = JSON.parse(savedShowFullList);
    return initialValue || false;
  });
  const [showComplete, setShowComplete] = useState(() => {
    // getting stored value
    const savedShowComplete = localStorage.getItem("showComplete");
    const initialValue = JSON.parse(savedShowComplete);
    return initialValue || false;
  });
  const [showAddJobOrSettings, setShowAddJobOrSettings] = useState("addJob");
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  async function makeRequest(config, doNext) {
    try {
      const response = await axios(config);
      console.log(response);
      // if we successfully add to the database do the call back - in the case of add that
      // means the callback is adding the item to the list
      // in the case of delete it will be filtering the item out of the list
      if (doNext) doNext(response.data);
    } catch (e) {
      // if there is an error do not change the list
      console.error(e);
    }
  }

  useEffect(() => {
    // if (!pullFromServer) return;
    // setPullFromServer(false);
    (async () => {
      const items = await axios.get("https://lab34server.onrender.com/todo");
      console.log(items.data);
      setList(items.data);
    })();
  }, []);

  async function addItem(item) {
    item.complete = false;
    console.log(item);
    // make axios request to post the item to the server
    const config = {
      method: "post",
      baseURL: "https://lab34server.onrender.com",
      url: "/todo",
      data: item,
    };
    const doNext = (item) => setList([...list, item]);

    const data = await makeRequest(config, doNext);

    console.log(data);
    // setPullFromServer(true);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    /// this function is gated by your auth
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    const newIncomplete = items.filter((it) => !it.complete);
    setIncomplete(newIncomplete);
    setList(items);
  }

  function toggleList() {
    setShowFullList((prev) => {
      const newShowFullList = !prev;
      localStorage.setItem("showFullList", JSON.stringify(newShowFullList));
      return newShowFullList;
    });
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    localStorage.setItem("list", JSON.stringify(list));
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
        </div>
        </Auth>
    </Context.Provider>
  );
};

export default Todo;

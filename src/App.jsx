import {useContext} from 'react';
import Todo from './Components/Todo';
export const somethingContext = useContext('something');


export default function App() {
    return (
      <Todo />
    );
}

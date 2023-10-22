import { useContext } from 'react';
import { Context } from '../Todo';
import { Button } from '@mui/material';
import Auth from '../../Auth/AuthWrap';

function Form() {
  const { handleChange, handleSubmit, defaultValues} = useContext(Context);

  return (
    <form onSubmit={handleSubmit}>

        <h2>Add Item to List</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
        <Auth capability='create'>
          <Button variant="contained" type="submit">Add Item</Button>
        </Auth>
        </label>
      </form>
  )
}

export default Form
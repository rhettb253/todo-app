import { useContext } from "react";
import { Context } from "../Todo";

function ShortList() {
  const { list, toggleComplete } = useContext(Context);

  return (
    <section>
      {list.slice(0, 3).map((item) => (
        <div key={item.id}>
          <p>{'Job: ' + item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)} >
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default ShortList;
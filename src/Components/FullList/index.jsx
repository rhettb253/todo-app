import { useContext } from "react";
import { Context } from "../Todo";
import { Button } from "@mui/material";

function FullList() {
  const { list, toggleComplete, showComplete } = useContext(Context);

  return (
    <section>
      {list.map((item) => {
        if (item.complete && !showComplete) {
          return null;
        } else {
        return <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button color={item.complete ? "success" : "error"} onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </Button>
          <hr />
        </div>
      }})}
    </section>
  );
}

export default FullList;

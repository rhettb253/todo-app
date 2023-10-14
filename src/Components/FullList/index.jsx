import { useContext, useState } from "react";
import { Context } from "../Todo";
import { Button, Stack, Pagination } from "@mui/material";

function FullList() {
  const { list, toggleComplete, showComplete, showFullList } =
    useContext(Context);
  const [showItem, setShowItem] = useState();

  function formatList(e) {
    let index = Number(e.target.innerText) - 1;
    setShowItem(index);
  }

  return (
    <>
      {list.length > 0 && (
        <Stack spacing={1}>
          <p>Bring a job to the top:</p>
          <Pagination
            hideNextButton
            hidePrevButton
            count={list.length}
            variant="outlined"
            color="primary"
            onClick={formatList}
          />
        </Stack>
      )}
      {!isNaN(showItem) && (
        <div className="highlight" key={list[showItem].id}>
          <p>{list[showItem].text}</p>
          <p>
            <small>Assigned to: {list[showItem].assignee}</small>
          </p>
          <p>
            <small>Difficulty: {list[showItem].difficulty}</small>
          </p>
          <Button
            color={list[showItem].complete ? "success" : "error"}
            onClick={() => toggleComplete(list[showItem].id)}
          >
            Complete: {list[showItem].complete.toString()}
          </Button>
          <hr />
        </div>
      )}
      <section>
        {showFullList
          ? list.map((item, idx) => {
              if (item.complete && !showComplete) {
                return null;
              } else {
                return (
                  <div key={item.id}>
                    <p>{idx + 1 + ". " + item.text}</p>
                    <p>
                      <small>Assigned to: {item.assignee}</small>
                    </p>
                    <p>
                      <small>Difficulty: {item.difficulty}</small>
                    </p>
                    <Button
                      color={item.complete ? "success" : "error"}
                      onClick={() => toggleComplete(item.id)}
                    >
                      Complete: {item.complete.toString()}
                    </Button>
                    <hr />
                  </div>
                );
              }
            })
          : list
              .map((item, idx) => {
                if (item.complete && !showComplete) {
                  return null;
                } else {
                  return (
                    <div key={item.id}>
                      <p>{idx + 1 + ". " + item.text}</p>
                      <p>
                        <small>Assigned to: {item.assignee}</small>
                      </p>
                      <p>
                        <small>Difficulty: {item.difficulty}</small>
                      </p>
                      <Button
                        color={item.complete ? "success" : "error"}
                        onClick={() => toggleComplete(item.id)}
                      >
                        Complete: {item.complete.toString()}
                      </Button>
                      <hr />
                    </div>
                  );
                }
              })
              .slice(0, 3)}
      </section>
    </>
  );
}

export default FullList;

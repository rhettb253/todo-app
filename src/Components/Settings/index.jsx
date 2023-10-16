import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Todo";

function Settings() {
  const { setShowComplete, toggleList, showFullList, showComplete } = useContext(Context);

  const toggleShowComplete = () => {
    setShowComplete((prev) => {
      const newShowComplete = !prev
      localStorage.setItem("showComplete", JSON.stringify(newShowComplete));
      return newShowComplete;
    });
  }

  return (
    <div className="settings">
      <h2>Display Settings</h2>
      <Button variant="contained" onClick={toggleList}>
        {showFullList ? "View Short List" : "View Full List"}
      </Button>
      <Button
        variant="contained"
        onClick={toggleShowComplete}
      >
        {showComplete ? "Hide Completed Jobs" : "View Completed Jobs"}
      </Button>
    </div>
  );
}

export default Settings;

import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Todo";

function Settings() {
  const { setShowComplete, toggleList, showFullList, showComplete } = useContext(Context);

  return (
    <div className="settings">
      <h2>Display Settings</h2>
      <Button variant="contained" onClick={toggleList}>
        {showFullList ? "View Short List" : "View Full List"}
      </Button>
      <Button
        variant="contained"
        onClick={() => setShowComplete(!showComplete)}
      >
        {showComplete ? "Hide Completed Jobs" : "View Completed Jobs"}
      </Button>
    </div>
  );
}

export default Settings;

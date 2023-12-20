import React from "react";
import useStyle from "./styles";
import Button from "@mui/material/Button";

const HeaderPanel = () => {
  const styles = useStyle();
  return (
    <div className={styles.mainArea}>
      <div></div>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            alert("Clicked on Sign Out.");
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default HeaderPanel;

import React from "react";
import useStyle from "./styles";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  setOpenEditForm,
  setOpenNewForm,
} from "../../Redux/Actions/ModalActions";

const SidePanel = () => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const handleNewForm = () => {
    dispatch(setOpenNewForm({ visible: true }));
  };
  return (
    <div className={styles.mainArea}>
      <div className={styles.logoArea}>
        <Button variant="text">Logo</Button>
      </div>
      <div className={styles.optionsArea}>
        <Button variant="text" onClick={handleNewForm}>
          Add Product
        </Button>
      </div>
      {/* <div className={styles.optionsArea}>
        <Button variant="text">Option</Button>
      </div> */}
    </div>
  );
};

export default SidePanel;

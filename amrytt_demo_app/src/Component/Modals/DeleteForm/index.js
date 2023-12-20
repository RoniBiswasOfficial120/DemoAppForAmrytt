import React from "react";
import { useStyle } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const DeleteForm = ({ actionCancel, actionDelete }) => {
  const styles = useStyle();
  return (
    <div className={styles.modalArea}>
      <Grid container sx={{ width: "100%", justifyContent: "center" }}>
        <Grid item xs={10} sm={9} md={6} lg={4}>
          <div className={styles.visibleArea}>
            <div>Are you sure to delete data?</div>
            <div className={styles.buttonContainer}>
              <Button variant="contained" onClick={actionCancel}>
                Cancel
              </Button>
              <Button variant="outlined" onClick={actionDelete}>
                Delete
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteForm;

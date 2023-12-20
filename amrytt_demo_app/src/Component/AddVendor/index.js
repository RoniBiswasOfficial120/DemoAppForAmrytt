import React, { useState } from "react";
import { muiStyles, useStyle } from "./styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddVarient from "../AddVarient";
import {
  addNewVarient,
  deleteVendor,
  updateVendorIsMain,
  updateVendorName,
} from "../../Utills/functions";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteForm from "../Modals/DeleteForm";

const AddVendor = ({ vendorIndex, vendorData, vendorList, setVendorList }) => {
  const styles = useStyle();
  const [deleteWarning, setDeleteWarning] = useState(false);
  return (
    <div className={styles.mainContainer}>
      {deleteWarning && (
        <DeleteForm
          actionCancel={() => setDeleteWarning(false)}
          actionDelete={() => {
            setDeleteWarning(false);
            deleteVendor(vendorList, setVendorList, vendorIndex);
          }}
        />
      )}
      {vendorIndex > 0 && (
        <div
          className={styles.closeButton}
          onClick={() => setDeleteWarning(true)}
        >
          <HighlightOffIcon fontSize="medium" />
        </div>
      )}
      <Grid container sx={muiStyles.gridVendorContainer}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={muiStyles.gridItem}>
          <TextField
            id="outlined-basic"
            label="Vendor Name"
            variant="outlined"
            size="small"
            fullWidth
            value={vendorData.vendorName}
            onChange={(e) => {
              updateVendorName(
                vendorList,
                setVendorList,
                vendorIndex,
                e.target.value
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={muiStyles.gridItem}>
          <div
            onClick={() => {
              updateVendorIsMain(vendorList, setVendorList, vendorIndex);
            }}
          >
            {vendorData.isMain ? (
              <RadioButtonCheckedIcon fontSize="large" />
            ) : (
              <RadioButtonUncheckedIcon fontSize="large" />
            )}
            <span>Is Main</span>
          </div>
        </Grid>
        {vendorData.varientList.map((value, index) => {
          return (
            <AddVarient
              varientData={value}
              vendorIndex={vendorIndex}
              varientIndex={index}
              vendorList={vendorList}
              setVendorList={setVendorList}
              key={index}
            />
          );
        })}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={muiStyles.gridItem}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() =>
              addNewVarient(vendorList, setVendorList, vendorIndex)
            }
          >
            Add Varient
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddVendor;

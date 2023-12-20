import React, { useState } from "react";
import { muiStyles } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  deleteVarient,
  updateVarientName,
  updateVarientNumber,
} from "../../Utills/functions";
import DeleteForm from "../Modals/DeleteForm";

const AddVarient = ({
  varientData,
  vendorIndex,
  varientIndex,
  vendorList,
  setVendorList,
}) => {
  const [deleteWarning, setDeleteWarning] = useState(false);
  return (
    <>
      {deleteWarning && (
        <DeleteForm
          actionCancel={() => setDeleteWarning(false)}
          actionDelete={() => {
            setDeleteWarning(false);
            deleteVarient(vendorList, setVendorList, vendorIndex, varientIndex);
          }}
        />
      )}
      <Grid item xs={12} sm={12} md={4} lg={4} sx={muiStyles.gridItem}>
        <TextField
          id="outlined-basic"
          label="Varient"
          variant="outlined"
          fullWidth
          size="small"
          value={varientData.varientName}
          onChange={(e) =>
            updateVarientName(
              vendorList,
              setVendorList,
              vendorIndex,
              varientIndex,
              e.target.value
            )
          }
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} sx={muiStyles.gridItem}>
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          fullWidth
          size="small"
          value={varientData.variantNumber}
          onChange={(e) =>
            updateVarientNumber(
              vendorList,
              setVendorList,
              vendorIndex,
              varientIndex,
              e.target.value
            )
          }
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} sx={muiStyles.gridItem}>
        {varientIndex > 0 && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setDeleteWarning(true)}
          >
            Delete Varient
          </Button>
        )}
      </Grid>
    </>
  );
};

export default AddVarient;

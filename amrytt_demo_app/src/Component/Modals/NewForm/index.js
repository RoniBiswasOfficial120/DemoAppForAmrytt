import React, { useEffect, useState } from "react";
import { muiStyles, useStyle } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddVendor from "../../AddVendor";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { setOpenNewForm } from "../../../Redux/Actions/ModalActions";
import { addNewVendor } from "../../../Utills/functions";
import { setFormData } from "../../../Redux/Actions/FormActions";

const NewForm = () => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [vendorList, setVendorList] = useState([]);

  const DataList = useSelector((state) => state.FormReducer);
  useEffect(() => {
    setName("");
    setDesc("");
    let innitialVendorList = [
      {
        vendorName: "",
        isMain: false,
        varientList: [{ varientName: "", variantNumber: "" }],
      },
    ];
    setVendorList(innitialVendorList);
  }, []);

  const handleSaveData = () => {
    console.log("DataList", DataList);
    let oldDataList = [...DataList];
    oldDataList.push({ name: name, desc: desc, vendorList: vendorList });
    dispatch(setFormData(oldDataList));
    handleNewForm();
    alert("Data Submitted Successfully.");
  };

  const handleNewForm = () => {
    dispatch(setOpenNewForm({ visible: false }));
  };

  return (
    <div className={styles.modalArea}>
      <div className={styles.closeButton} onClick={handleNewForm}>
        <HighlightOffIcon fontSize="medium" />
      </div>
      <Grid container sx={muiStyles.gridMainContainer}>
        <Grid item xs={11} sm={11} md={9} lg={8}>
          <div className={styles.visibleArea}>
            <h2>New Form</h2>
            <Grid sx={muiStyles.gridItemContainer}>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={muiStyles.gridItem}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={muiStyles.gridItem}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  size="small"
                  maxRows={1}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Grid>
            </Grid>
            <div className={styles.scrollableArea}>
              {vendorList.map((value, index) => {
                return (
                  <AddVendor
                    vendorIndex={index}
                    vendorData={value}
                    vendorList={[...vendorList]}
                    setVendorList={setVendorList}
                    key={index}
                  />
                );
              })}
            </div>

            <div className={styles.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => addNewVendor(vendorList, setVendorList)}
              >
                Add Vendor
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button variant="outlined" onClick={handleNewForm}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSaveData}>
                Submit
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewForm;

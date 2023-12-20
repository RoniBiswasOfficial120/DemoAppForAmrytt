import React, { useEffect, useState } from "react";
import { muiStyles, useStyle } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddVendor from "../../AddVendor";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { setOpenEditForm } from "../../../Redux/Actions/ModalActions";
import { addNewVendor } from "../../../Utills/functions";
import { setFormData } from "../../../Redux/Actions/FormActions";
import DeleteForm from "../DeleteForm";

const EditForm = ({ index }) => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [vendorList, setVendorList] = useState([]);
  const [deleteWarning, setDeleteWarning] = useState(false);

  const DataList = useSelector((state) => state.FormReducer);

  useEffect(() => {
    DataList.map((value, dataIndex) => {
      if (dataIndex === index) {
        setName(value.name);
        setDesc(value.desc);
        setVendorList(value.vendorList);
      }
    });
  }, []);

  const handleSaveData = () => {
    let oldDataList = [...DataList];
    let newDataList = oldDataList.map((value, dataListIndex) => {
      if (index === dataListIndex) {
        return { name: name, desc: desc, vendorList: vendorList };
      } else return value;
    });
    dispatch(setFormData(newDataList));
    handleEditForm();
    alert("Data Updated Successfully.");
  };

  const handleDeleteData = () => {
    let oldDataList = [...DataList];
    let newDataList = oldDataList.splice(index, 1);
    dispatch(setFormData(newDataList));
  };

  const handleEditForm = () => {
    dispatch(setOpenEditForm({ visible: false, index: null }));
  };

  return (
    <div className={styles.modalArea}>
      <div className={styles.closeButton} onClick={handleEditForm}>
        <HighlightOffIcon fontSize="medium" />
      </div>
      {deleteWarning && (
        <DeleteForm
          actionCancel={() => setDeleteWarning(false)}
          actionDelete={() => {
            setDeleteWarning(false);
            handleDeleteData();
          }}
        />
      )}
      <Grid container sx={muiStyles.gridMainContainer}>
        <Grid item xs={11} sm={11} md={9} lg={8}>
          <div className={styles.visibleArea}>
            <h2>Edit Form</h2>
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
              {vendorList.map((value, vendorIndex) => {
                return (
                  <AddVendor
                    vendorIndex={vendorIndex}
                    vendorData={value}
                    vendorList={[...vendorList]}
                    setVendorList={setVendorList}
                    key={vendorIndex}
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
              <Button variant="outlined" onClick={handleEditForm}>
                Cancel
              </Button>
              <Button variant="outlined" onClick={() => setDeleteWarning(true)}>
                Delete
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

export default EditForm;

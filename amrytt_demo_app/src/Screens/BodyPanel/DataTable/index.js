import React from "react";
import { useStyle } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { setOpenEditForm } from "../../../Redux/Actions/ModalActions";

const DataTable = () => {
  const styles = useStyle();
  const dataList = useSelector((state) => state.FormReducer);
  const dispatch = useDispatch();

  const handleEditData = (firstColIndex) => {
    dispatch(setOpenEditForm({ visible: true, index: firstColIndex }));
  };

  return (
    <div className={styles.mainArea}>
      <table>
        <thead>
          <tr>
            <th width={"25%"}>name</th>
            <th width={"25%"}>vendor</th>
            <th width={"25%"}>varient</th>
            <th width={"25%"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.length > 0 ? (
            [...dataList].map((firstCol, firstColIndex) => {
              return firstCol.vendorList.map((secondCol, secondColIndex) => {
                return secondCol.varientList.map((thirdCol, thirdColIndex) => {
                  return (
                    <tr key={Math.random()}>
                      <td>
                        {thirdColIndex === 0 &&
                          secondColIndex === 0 &&
                          firstCol.name}
                      </td>
                      <td>{thirdColIndex === 0 && secondCol.vendorName}</td>
                      <td>{thirdCol.varientName}</td>
                      <td className={styles.colStyle}>
                        <Button
                          variant="contained"
                          onClick={() => handleEditData(firstColIndex)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                });
              });
            })
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No Records Present.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

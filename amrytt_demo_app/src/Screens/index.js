import HeaderPanel from "./HeaderPanel";
import { makeStyles } from "@mui/styles";
import SidePanel from "./SidePanel";
import BodyPanel from "./BodyPanel";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import NewForm from "../Component/Modals/NewForm";
import EditForm from "../Component/Modals/EditForm";
import DeleteForm from "../Component/Modals/DeleteForm";

// Internal CSS using MUI
const useStyle = makeStyles({
  mainScreen: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
  },
});

const MainScreen = () => {
  const styles = useStyle();
  const modalData = useSelector((state) => state.ModalReducer);
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className={styles.mainScreen}>
      {modalData.NewForm.visible && <NewForm />}
      {modalData.EditForm.visible && (
        <EditForm index={modalData.EditForm.index} />
      )}
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={4} sm={4} md={3} lg={2}>
          <SidePanel />
        </Grid>
        <Grid item xs={8} sm={8} md={9} lg={10}>
          <HeaderPanel />
          <BodyPanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainScreen;

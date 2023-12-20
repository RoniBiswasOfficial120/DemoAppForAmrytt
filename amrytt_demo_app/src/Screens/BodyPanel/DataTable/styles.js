import { makeStyles } from "@mui/styles";

export const muiStyles = {};

export const useStyle = makeStyles({
  mainArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    maxHeight: "calc(100vh - 75px)",
    backgroundColor: "#00000080",
    padding: "24px",
    overflowY: "scroll",
  },
  colStyle: {
    textAlign: "center",
  },
});

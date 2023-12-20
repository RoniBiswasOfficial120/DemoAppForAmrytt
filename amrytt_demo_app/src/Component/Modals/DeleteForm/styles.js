import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  modalArea: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080",
    zIndex: 100,
  },
  visibleArea: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "2px solid blue",
    backgroundColor: "white",
    padding: "2.5%",
  },
  buttonContainer: {
    marginTop: "24px",
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
});

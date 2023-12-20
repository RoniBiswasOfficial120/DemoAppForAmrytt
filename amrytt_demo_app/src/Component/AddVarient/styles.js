import { makeStyles } from "@mui/styles";

export const muiStyles = {
  gridMainContainer: {
    width: "100%",
    justifyContent: "center",
  },
  gridItemContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  gridVendorContainer: {
    border: "1px solid blue",
    padding: "24px",
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
    justifyContent: "space-between",
  },
  gridItem: {
    padding: "12px",
    minHeight: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const useStyle = makeStyles({
  modalArea: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080",
    zIndex: 10,
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
  scrollableArea: {
    maxHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "scroll",
  },
  buttonContainer: {
    marginTop: "12px",
    width: "50%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
});

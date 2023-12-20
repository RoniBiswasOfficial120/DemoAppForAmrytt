import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  mainArea: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor:"black",
    borderRight:"5px solid blue"
  },
  optionsArea: {
    height: "50px",
    width: "100%",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  logoArea: {
    height: "75px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default useStyle;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 250,
    height: 350,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  image: {
    height: 200,
    // height: 100,
    // paddingTop: "56.25%",
    // marginTop: "30",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  colorGreen: {
    color: "#12947f",
  },
  colorRed: {
    color: "#e71414",
  }
}));

export default useStyles;

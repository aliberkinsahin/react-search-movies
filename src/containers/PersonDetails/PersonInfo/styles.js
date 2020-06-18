import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  bold: {
    fontWeight: "bold",
  },
  divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
  },
  cardActions: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default useStyles;

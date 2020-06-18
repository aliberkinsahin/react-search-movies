import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: theme.spacing(2),
    width: "80%",
    maxWidth: 800
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    marginBottom: theme.spacing(1),
    width: "100%"
  },
  button: {
    marginBottom: theme.spacing(3),
  },
  selectionForm : {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.25),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;

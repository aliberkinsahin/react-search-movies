import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 250,
    height: 320,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  image: {
    height: 200,
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  }
}));

export default useStyles;

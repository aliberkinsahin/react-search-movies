import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    //   width: 250,
    margin: "auto",
    display: "block",
    maxWidth: 300,
    maxHeight: "100%",
  },
  cardActions: {
      justifyContent: "center"
  }
}));

export default useStyles;

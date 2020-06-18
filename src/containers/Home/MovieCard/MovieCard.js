import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/InfoOutlined";

export default function MovieCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            title={props.title}
            image={`https://image.tmdb.org/t/p/w200${props.poster_path}`}
          />
          <CardContent>
            <Typography variant="subtitle1" noWrap>
              {props.title}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {props.release_date || "-"}
            </Typography>
            <Typography
              className={
                props.vote_average >= 6 ? classes.colorGreen : classes.colorRed
              }
              // color={props.vote_average >= 6 ? "textPrimary" : "secondary"}
              variant="body2"
              component="span"
            >
              Rating: {props.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            color="primary"
            variant="outlined"
            size="small"
            startIcon={<InfoIcon />}
            onClick={props.onClick}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

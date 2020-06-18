import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Link,
} from "@material-ui/core";
import useStyles from "./styles";

export default function ImageCard(props) {
  const classes = useStyles();

  let homepageButtonRender = null;
  if (props.homepage) {
    homepageButtonRender = (
      <Button variant="contained" color="primary">
        <Link
          href={props.homepage}
          color="inherit"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          Homepage
        </Link>
      </Button>
    );
  }

  return (
    <Card className={classes.image}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.id}
          title={props.title}
          image={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        />
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" color="secondary">
          <Link
            href={`https://www.imdb.com/${props.imdbId}`}
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            IMDB
          </Link>
        </Button>
        {homepageButtonRender}
      </CardActions>
    </Card>
  );
}

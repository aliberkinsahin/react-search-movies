import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Link,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function PersonInfo(props) {
  const {
    name,
    birthday,
    knownFor,
    deathday,
    biography,
    placeOfBirth,
    facebook,
    twitter,
    instagram,
  } = props;

  const classes = useStyles();

  let deathdayRender = null;
  if (deathday) {
    deathdayRender = (
      <Typography variant="caption"> - Death: {deathday}</Typography>
    );
  }

  let facebookLinkRender = null;
  if (facebook) {
    facebookLinkRender = (
      <IconButton aria-label="facebook">
        <Link
          href={`https://www.facebook.com/${facebook}`}
          color="inherit"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon fontSize="large" color="primary" />
        </Link>
      </IconButton>
    );
  }

  let twitterLinkRender = null;
  if (twitter) {
    twitterLinkRender = (
      <IconButton aria-label="twitter">
          <Link
            href={`https://www.twitter.com/${twitter}`}
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon fontSize="large" color="primary" />
          </Link>
        </IconButton>
    );
  }

  let instagramLinkRender = null;
  if (instagram) {
    instagramLinkRender = (
      <IconButton aria-label="instagram">
          <Link
            href={`https://www.instagram.com/${instagram}`}
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon fontSize="large" color="secondary" />
          </Link>
        </IconButton>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          <span className={classes.bold}>{name} </span>
        </Typography>
        <Typography variant="caption">Birth: {birthday}</Typography>
        {deathdayRender}
        <Divider className={classes.divider} />
        {/* Genre Chips will be here */}
        <Typography variant="subtitle1" component="p">
          Place of Birth: {placeOfBirth}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p">
          {biography}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1">Known for: {knownFor}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {facebookLinkRender}
        {twitterLinkRender}
        {instagramLinkRender}
      </CardActions>
    </Card>
  );
}

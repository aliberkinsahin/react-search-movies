import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import CategoryIcon from "@material-ui/icons/Category";
import InfoIcon from '@material-ui/icons/Info';

export default function AppDrawer(props) {
  const classes = useStyles();

  return (
    <Drawer
      open={props.drawerIsOpen}
      onClose={props.onClose}
    >
      <List className={classes.list} onClick={props.onClose}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/search">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
}

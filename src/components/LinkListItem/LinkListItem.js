import React from 'react'
import {
    ListItem,
    ListItemText,
    ListItemIcon,
  } from "@material-ui/core";
  

export default function LinkListItem(props) {
    return (
        <ListItem button component="a" href={props.link}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
    )
}

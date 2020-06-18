import React from "react";
import { Typography, List, Divider } from "@material-ui/core";
import LinkListItem from "../../../components/LinkListItem/LinkListItem";
import GetAppIcon from "@material-ui/icons/GetApp";

const packages = [
  {
    name: "material-ui",
    link: "https://material-ui.com/",
  },
  {
    name: "react-router",
    link: "https://reacttraining.com/react-router/",
  },
  {
    name: "redux",
    link: "https://redux.js.org/",
  },
  {
    name: "redux-saga",
    link: "https://redux-saga.js.org/",
  },
  {
    name: "axios",
    link: "https://www.npmjs.com/package/axios",
  },
];

export default function PackagesList() {
  return (
    <List component="nav" aria-label="packages">
      <Typography variant="h6">Packages Used In This Project</Typography>
      <Divider />
      {packages.map((_package) => {
        return (
          <LinkListItem
            key={_package.name}
            name={_package.name}
            link={_package.link}
            icon={<GetAppIcon />}
          />
        );
      })}
    </List>
  );
}

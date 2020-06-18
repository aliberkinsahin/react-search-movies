import React from "react";
import { List, Typography, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TheatersIcon from "@material-ui/icons/Theaters";
import LinkListItem from "../../../components/LinkListItem/LinkListItem";

const externalLinks = [
  {
    name: "Github",
    link: "#",
    icon: <GitHubIcon />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ali-berkin-sahin/?originalSubdomain=au",
    icon: <LinkedInIcon />,
  },
  {
    name: "The Movie Database",
    link: "https://www.themoviedb.org/",
    icon: <TheatersIcon />,
  },
];

export default function ExternalLinks() {
  return (
    <List component="nav" aria-label="external-links">
      <Typography variant="h6">Links</Typography>
      <Divider />
      {externalLinks.map((_link) => {
        return (
          <LinkListItem
            key={_link.name}
            name={_link.name}
            link={_link.link}
            icon={_link.icon}
          />
        );
      })}
      <Divider />
    </List>
  );
}

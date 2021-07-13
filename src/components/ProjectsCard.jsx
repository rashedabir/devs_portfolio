import {
  Button,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

function ProjectsCard({ data, dark }) {
  const { name, image, deployed_url, github_url } = data;
  return (
    <Grid item lg={4} md={6} sm={12} xs={12} className="project_card">
      <Button href={deployed_url} target="_blank">
        <img src={image} alt={name} />
      </Button>
      <Button href={github_url} target="_blank">
        <GitHubIcon className="git_icon" /> <p className={dark ? "project_title" : ""}>{name}</p>
      </Button>
    </Grid>
  );
}

export default ProjectsCard;

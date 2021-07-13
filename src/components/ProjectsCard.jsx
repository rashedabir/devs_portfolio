import { Button, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";
import React from "react";

function ProjectsCard({ data, dark }) {
  const { name, image, deployed_url, github_url } = data;

  const navbar_varient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <Grid item lg={4} md={6} sm={12} xs={12} className="project_card">
      <motion.div
        variants={navbar_varient}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Button href={deployed_url} target="_blank">
          <img src={image} alt={name} />
        </Button>
        <Button href={github_url} target="_blank">
          <GitHubIcon className="git_icon" />{" "}
          <p className={dark ? "project_title" : ""}>{name}</p>
        </Button>
      </motion.div>
    </Grid>
  );
}

export default ProjectsCard;

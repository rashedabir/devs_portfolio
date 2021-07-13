import { Container } from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";

function ProjectNotFound({ search }) {
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
    <motion.div
      className="not_found"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <h1>
          4
          <span>
            <i className="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2>Result for: {search}</h2>
        <p>Sorry, the project you're looking for cannot be find</p>
      </Container>
    </motion.div>
  );
}

export default ProjectNotFound;

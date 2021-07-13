import { Container } from "@material-ui/core";
import React from "react";

function ProjectMotFound({ search }) {
  return (
    <Container className="not_found">
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
  );
}

export default ProjectMotFound;

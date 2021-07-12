import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Card } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

function ProjectsCard({ data, dark }) {
  const { name, image, deployed_url, github_url } = data;
  return (
    <Card
      className="project_card"
      style={dark ? { backgroundColor: "#111111", color: "#fff" } : null}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card_actions">
        {
            deployed_url === "" ? null : <Button
            size="small"
            className="deploy"
            href={deployed_url}
            target="_blank"
          >
            <VisibilityIcon />
          </Button>
        }
        <Button
          size="small"
          className="github"
          href={github_url}
          target="_blank"
        >
          <GitHubIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectsCard;

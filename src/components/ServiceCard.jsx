import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

function ServiceCard({ service, dark }) {
  return (
    <Grid item xs={12} sm={6} className="about_service_card">
      <Card
        style={
          dark ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <CardActionArea>
          <CardContent className={dark ? "service_card_dark" : "service_card"}>
            <i className={service.icon}></i>
            <div>
              <Typography gutterBottom variant="h6" component="h2">
                {service.title}
              </Typography>
              <Typography variant="body2" component="p">
                {service.about}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ServiceCard;

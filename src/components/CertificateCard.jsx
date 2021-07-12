import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#eee",
  },
  dark: {
    maxWidth: 345,
    backgroundColor: "#111111",
    color: "#fff",
  },
});

function CertificateCard({ data, dark }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} className={"certificate_card"}>
      <Button className="link" href={data.link} target="_blank">
        <Card className={dark ? classes.dark : classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2" component="p">
                {data.heading}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Button>
    </Grid>
  );
}

export default CertificateCard;

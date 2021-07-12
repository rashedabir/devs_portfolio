import { Typography } from "@material-ui/core";
import React from "react";

function ResumeCard({ data, dark }) {
  return (
    <div className="resume_card">
      <Typography variant="h6">
        <h4>{data.title}</h4>
      </Typography>
      <Typography className={dark && "name_dark"}>
        {data.name}
      </Typography>
      <Typography className="details" variant="body2" component="p">
        {data.details}
      </Typography>
    </div>
  );
}

export default ResumeCard;

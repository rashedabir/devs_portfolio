import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Bar from "../components/Bar";
import ResumeCard from "../components/ResumeCard";
import educationData from "../utils/educationData";
import experienceData from "../utils/experienceData";
import languages from "../utils/languageData";
import tools from "../utils/toolsData";
import { motion } from "framer-motion";

function Resume({ dark }) {
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
      exit: {
        opacity: 0,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container className="resume_component">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography>
              <h2>Education</h2>
            </Typography>
            {educationData.map((data) => (
              <ResumeCard dark={dark} data={data} />
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <h2>Experience</h2>
            </Typography>
            {experienceData.map((data) => (
              <ResumeCard dark={dark} data={data} />
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>
              <h2>Language & Framework</h2>
            </Typography>
            <div className="bar_content">
              {languages.map((data) => (
                <Bar dark={dark} data={data} />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <h2>Tools & Softwares</h2>
            </Typography>
            <div className="bar_content">
              {tools.map((data) => (
                <Bar dark={dark} data={data} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Resume;

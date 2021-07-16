import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import service from "../utils/serviceData";

function About({ dark }) {

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
      className="about_intro"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography>
        <h4>
          I'm currently pursuing B.SC(Final Year) in Computer Science
          Engineering from Daffodil International University. I consider myself
          who is persistent, a quick learner, and loves problem-solving by using
          simple and scalable solutions. In my everyday life, I try to love
          reading a book, write different things, helping people, and coding as
          well. I also think about different sorts of people. That basically
          inspires me as a different aspect.
        </h4>
      </Typography>
      <Container className={dark ? "about_service_dark" : "about_service"}>
        <Typography variant="h5" className="about_title">
          <h3>what i offer</h3>
        </Typography>
        <Grid container className="service" spacing={3}>
          {service.map((service) => (
            <ServiceCard dark={dark} service={service} />
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}

export default About;

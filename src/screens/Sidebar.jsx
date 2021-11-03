import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import rashed from "../assets/images/rashed abir.JPEG";
import GetAppIcon from "@material-ui/icons/GetApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import Typed from "react-typed";
import aburashedkhan from "../assets/Abu Rashed Khan_(CV).pdf";
import { motion } from "framer-motion";

function Sidebar({ dark, setDark }) {
  const handleEmail = () => {
    window.open("mailto:rashedabir.cse@gmail.com");
  };

  const handleCall = () => {
    window.open("tel:+8801629341869");
  };

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
    <Container style={{ padding: "0" }}>
      <motion.div
        className="sidebar_left"
        variants={navbar_varient}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={rashed} alt="rashed abir" />
        <Typography className="title" variant="h5">
          <h4>Abu Rashed Khan</h4>
        </Typography>
        <div className={dark ? "heading_dark" : "heading"}>
          <Button>
            <Typography>
              <h4>
                <Typed
                  strings={[
                    "Computer Engineer",
                    "Web Designer",
                    "Web Developer",
                    "React Developer",
                    "JavaScript Developer",
                    "Full Stack Developer",
                  ]}
                  typeSpeed={100}
                  backSpeed={40}
                  loop
                />
              </h4>
            </Typography>
          </Button>
        </div>
        <div className={dark ? "resume_dark" : "resume"}>
          <Button href={aburashedkhan} download="Abu Rashed Khan_(CV).pdf">
            <Typography className="d-flex">
              <GetAppIcon className="icon" />
              <h4>Download Resume</h4>
            </Typography>
          </Button>
        </div>
        <div className={dark ? "social_icons_dark" : "social_icons"}>
          <Button
            href="https://www.facebook.com/abu.rashed.abir/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icon" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/rashedabir/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon" />
          </Button>
          <Button
            href="https://github.com/rashedabir"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" style={{ fontSize: "31px" }} />
          </Button>
          <Button
            href="https://www.instagram.com/rashedabir_"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="icon" />
          </Button>
        </div>
        <div className={dark ? "info_dark" : "info"}>
          <Button href="https://codeblogs-tech.web.app/" target="_blank">
            <TurnedInIcon className="icon" /> <h4>blogs</h4>
          </Button>
          <Button href="https://g.page/rashed-abir?share" target="_blank">
            <RoomIcon className="icon" /> <h4>Comilla, Bangladesh</h4>
          </Button>
          <Button onClick={handleEmail}>
            <EmailIcon className="icon" /> <h4>rashedabir.cse@gmail.com</h4>
          </Button>
          <Button onClick={handleCall}>
            <PhoneIphoneIcon className="icon" /> <h4>+880 162 9341869</h4>
          </Button>
        </div>
        <div className={dark ? "dark_button" : "ui_button"}>
          <Button
            onClick={() => {
              setDark(!dark);
            }}
          >
            <h3>{dark ? "light" : "dark"} ui</h3>
          </Button>
        </div>
        <div className="hire_button">
          <Button href="https://www.fiverr.com/share/DdGrQN" target="_blank">
            <h3>hire me</h3>
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}

export default Sidebar;

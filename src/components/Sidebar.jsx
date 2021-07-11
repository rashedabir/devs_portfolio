import { Button, Typography } from "@material-ui/core";
import React from "react";
import rashed from "../assets/images/rashed abir.JPEG";
import GetAppIcon from "@material-ui/icons/GetApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import Typed from "react-typed";

function Sidebar({ dark, setDark }) {
  return (
    <div className="sidebar_left">
      <img src={rashed} width="100%" alt="rashed abir" />
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
        <Button>
          <Typography className="d-flex">
            <GetAppIcon className="icon" />
            <h4>Download Resume</h4>
          </Typography>
        </Button>
      </div>
      <div className="social_icons">
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
          href="https://twitter.com/rashedabir_"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="icon" />
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
        <Button>
          <a
            className="d-flex"
            href="https://github.com/rashedabir"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" /> <h4>github</h4>
          </a>
        </Button>
        <Button>
          <RoomIcon className="icon" /> <h4>Comilla, Bangladesh</h4>
        </Button>
        <Button>
          <EmailIcon className="icon" /> <h4>rashedabir.cse@gmail.com</h4>
        </Button>
        <Button>
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
        <Button>
          <h3>hire me</h3>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;

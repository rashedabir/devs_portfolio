import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ dark }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) {
      setActive("About");
    } else if (currentUrl.endsWith("/projects")) {
      setActive("Projects");
    } else if (currentUrl.endsWith("/resume")) {
      setActive("Resume");
    }
  }, [active]);

  return (
    <div className={dark ? "navbar_dark" : "navbar"}>
      <div className={dark ? "navbar_active_dark" : "navbar_active"}>
        {active}
      </div>
      <div className="navbar_items">
        {active !== "About" && (
          <Link to="/">
            <Button
              className={dark ? "navbar_item_dark" : "navbar_item"}
              onClick={() => {
                setActive("About");
              }}
            >
              About
            </Button>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <Button
              className={dark ? "navbar_item_dark" : "navbar_item"}
              onClick={() => {
                setActive("Resume");
              }}
            >
              Resume
            </Button>
          </Link>
        ) : null}

        {active !== "Projects" && (
          <Link to="projects">
            <Button
              className={dark ? "navbar_item_dark" : "navbar_item"}
              onClick={() => {
                setActive("Projects");
              }}
            >
              Projects
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

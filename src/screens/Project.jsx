import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import ProjectsCard from "../components/ProjectsCard";
import projectsData from "../utils/projectsData";
import SearchIcon from "@material-ui/icons/Search";
import ProjectNotFound from "../components/ProjectNotFound";
import { motion } from "framer-motion";

function Project({ dark }) {
  const [projects, setProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    if (name === "All") {
      setProjects(projectsData);
      setActive(name);
    } else {
      const filterData = projectsData.filter((project) =>
        project.category.includes(name)
      );
      setProjects(filterData);
      setActive(name);
    }
  };

  const handleSearch = projects.filter((project) => {
    return project.name.toLowerCase().includes(search.toLowerCase());
  });

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
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container maxWidth="lg" className="projects">
        <Grid container spacing={3} className="projects_bar">
          <Grid item xs={12} lg={8}>
            {search.length ? null : (
              <ProjectNavbar
                active={active}
                dark={dark}
                handleFilterCategory={handleFilterCategory}
              />
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={dark ? "project-search_dark" : "project-search"}>
              <SearchIcon className={dark ? "search_dark" : "search"} />
              <input
                placeholder="Search Project"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              {search.length ? (
                <i
                  onClick={() => {
                    setSearch("");
                  }}
                  className="fas fa-times-circle cancel"
                ></i>
              ) : null}
            </div>
          </Grid>
        </Grid>
        <Grid container className="project_box_card" spacing={1}>
          {handleSearch.length ? (
            handleSearch.map((data) => <ProjectsCard dark={dark} data={data} />)
          ) : (
            <ProjectNotFound search={search} />
          )}
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Project;

import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import ProjectsCard from "../components/ProjectsCard";
import projectsData from "../utils/projectsData";
import SearchIcon from "@material-ui/icons/Search";
import ProjectMotFound from "../components/ProjectMotFound";

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
  return (
    <Container className="projects">
      <Grid container spacing={3} className="projects_bar">
        <Grid item xs={12} lg={8}>
          <ProjectNavbar
            active={active}
            dark={dark}
            handleFilterCategory={handleFilterCategory}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={dark ? "project-search_dark" : "project-search"}>
            <SearchIcon className="search" />
            <input
              placeholder="Search Project"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className="project_box_card" spacing={1}>
        {handleSearch.length
          ? handleSearch.map((data) => <ProjectsCard dark={dark} data={data} />)
          : <ProjectMotFound search={search} />}
      </Grid>
    </Container>
  );
}

export default Project;

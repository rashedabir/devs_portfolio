import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Sidebar from "./screens/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Resume from "./screens/Resume";
import Project from "./screens/Project";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <Router>
      <div className={dark ? "App_dark" : "App"}>
        <Container>
          <Grid container spacing={5} className="app_content">
            <Grid
              item
              lg={3}
              md={4}
              sm={12}
              xs={12}
              className={dark ? "sidebar_dark" : "sidebar"}
            >
              <Sidebar dark={dark} setDark={setDark} />
            </Grid>
            <Grid item xs className={dark ? "main_dark" : "main"}>
              <Navbar dark={dark} />
              <Switch>
                <Route exact path="/">
                  <About dark={dark} />
                </Route>
                <Route exact path="/resume">
                  <Resume dark={dark} />
                </Route>
                <Route exact path="/projects">
                  <Project dark={dark} />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;

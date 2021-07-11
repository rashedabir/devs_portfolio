import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
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
            <Grid item xs className="main">
              <Navbar />
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Project} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;

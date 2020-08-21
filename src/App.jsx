import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { School } from "./pages/School";
import { NoMatch } from "./pages/NoMatch";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    pages: ["/projects", "/school", "/about"],
  };

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Grid>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/school" component={School} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;

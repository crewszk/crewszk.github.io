import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { School } from "./components/School";
import { NoMatch } from "./components/NoMatch";
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import avatar from "./images/myAvatar.jpg";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            sticky="top"
          >
            <Navbar.Brand className="text-white" href="/">
              <Avatar src={avatar} />
            </Navbar.Brand>
            <Navbar.Brand className="text-white" href="/">
              Zack's Portfolio
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link className="text-light">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link className="text-light">Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/school">
                  <Nav.Link className="text-light">School</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link className="text-light">About</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id={"github-tooltip"}>My Github</Tooltip>}
                >
                  <Nav.Link href="https://github.com/crewszk" target="_blank">
                    <img src={github} alt="Link to my github" />
                  </Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id={"linkedin-tooltip"}>My LinkedIn</Tooltip>
                  }
                >
                  <Nav.Link
                    href="https://www.linkedin.com/in/crewszk"
                    target="_blank"
                  >
                    <img src={linkedin} alt="Link to my LinkedIn" />
                  </Nav.Link>
                </OverlayTrigger>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/school">
              <School />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

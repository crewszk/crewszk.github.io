import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import construction from "./images/construction.gif";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import avatar from "./images/myAvatar.jpg";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter basename="portfolio" hashType="noslash">
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
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;

export const Home = () => (
  <div>
    <h2>THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION</h2>
    <img src={construction} alt="" />
  </div>
);

export const School = () => (
  <div>
    <h2>This is the school page</h2>
  </div>
);

export const Projects = () => (
  <div>
    <h1>Hello World, this is the projects page</h1>
  </div>
);

export const About = () => (
  <div>
    <h1>Hello World, this is the About page</h1>
    <div>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">
        Dave Gandy
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </div>
);

export const NoMatch = () => (
  <div>
    <h1>NoMatch</h1>
  </div>
);

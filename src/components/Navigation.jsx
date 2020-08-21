import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import brand from "../images/sclassSmallGif.gif";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import avatar from "../images/myAvatar.jpg";

class Navigation extends Component {
  render() {
    return (
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
            <Nav.Link className="text-light" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-light" href="/school">
              School
            </Nav.Link>
            <Nav.Link className="text-light" href="/about">
              About
            </Nav.Link>
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
              overlay={<Tooltip id={"linkedin-tooltip"}>My LinkedIn</Tooltip>}
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
    );
  }
}

export default Navigation;

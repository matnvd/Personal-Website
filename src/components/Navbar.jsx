import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { about, mainBody, repos } from "../editable-stuff/config.js";
import useResizeObserver from "../hooks/useResizeObserver";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent navbar-dark"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink
            className="nav-items lead"
            href={process.env.PUBLIC_URL + "/#blogs"}
          >
            Blogs
          </NavLink>
          } */}
          <NavLink
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Résumé
          </NavLink>
          {about.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}
          {/* {leadership.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#leadership"}
            >
              Leadership
            </NavLink>
          )} */}
          {/* {experiences.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#experiences"}
            >
              Experiences
            </NavLink>
          )} */}
          {/* {webClippings.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#mediahighlights"}
            >
              Media Highlights
            </NavLink>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;

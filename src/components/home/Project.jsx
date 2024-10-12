import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Jumbotron } from "./migration";
import ProjectCard from "./ProjectCard";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

// manual project (if u want auto check hashir)
const Project = ({ heading, username, length}) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
            <>
              <ProjectCard
                key={`project-card-0`}
                id={`project-card-0`}
                name={"InfoBand"}
                description={"description"}
                svn_url={"https://github.com/matnvd/infoband"}
              />
              <ProjectCard
                key={`project-card-1`}
                id={`project-card-2`}
                name={"RHS App"}
                description={"description1"}
                svn_url={"https://github.com/matnvd/infoband"}
              />
              <ProjectCard
                key={`project-card-3`}
                id={`project-card-3`}
                name={"StreakFit"}
                description={"description1"}
                svn_url={"https://github.com/matnvd/infoband"}
              />
              <ProjectCard
                key={`project-card-4`}
                id={`project-card-4`}
                name={"Row City"}
                description={"description1"}
                svn_url={"https://github.com/matnvd/infoband"}
              />
              {/* left out  swappa listing alerts proj on linkedin*/}
            </>
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;

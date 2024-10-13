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
                description={"A wearable band with an accompanying flutter-based app to help those with special needs and/or those incapacitated during medical emergencies. Check out our website for product demos, explanations, and more info!"}
                svn_url={"https://infoband.us"}
                date={"September 3, 2024"}
                linkName={"InfoBand.us"}
              />
              <ProjectCard
                key={`project-card-1`}
                id={`project-card-2`}
                name={"RHS Student App"}
                description={"Collaborated on the RHS App, the official app of Ridgewood High School. Allows students to check the schedule, view absent teachers, and see important announcements."}
                svn_url={"https://apps.apple.com/us/app/rhs-student-app/id6466660622?platform=iphone"}
                date={"October 8, 2024"}
                linkName={"App Store Listing"}
              />
              <ProjectCard
                key={`project-card-3`}
                id={`project-card-3`}
                name={"StreakFit"}
                description={"A Gamified Fitness App currently in development. It's goal is to utilize a habit-building system that rewards users for working out and going to the gym through rewards."}
                svn_url={"https://www.canva.com/design/DAGTaMSPfE8/mS8jwml6ZhVoreQUK9q6mw/view?utm_content=DAGTaMSPfE8&utm_campaign=designshare&utm_medium=link&utm_source=editor"}
                date={"July 27, 2024"}
                linkName={"Pitch Deck"}
              />
              <ProjectCard
                key={`project-card-4`}
                id={`project-card-4`}
                name={"Row City"}
                description={"A prototype of a unified regatta results app. Row City is a flutter-based app that web scrapes rowing/crew data of regattas (a.k.a races) from websites like rowtown.org, regatta central, herenow, time-team, etc. to provide a more comprehensive and simplified way of viewing real-time race data."}
                svn_url={"https://github.com/matnvd/Row-City"}
                date={"July 9, 2024"}
                linkName={"GitHub Repo"}
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

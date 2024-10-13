import React from 'react';
import {
  Row
} from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';

const Experience = ({ experiences }) => {
  return (
    <Jumbotron id = "experiences" className="bg-light m-0">
      <h2 className="display-4 mb-5 text-center">
        {experiences.heading}
      </h2>
      <Row>
        {
          experiences.data.map((data, index) => {
            return <ExperienceCard key={index} data={data} />
          })
        }
      </Row>
    </Jumbotron>
  );
}

export default Experience;
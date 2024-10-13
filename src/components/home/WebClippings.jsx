import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Jumbotron } from "./migration";

const WebClippings = ({ heading}) => {
    return (
        // <section id="webclippings" className="section">
            <Jumbotron id="webclippings" className="bg-white">
                <Container className="">
                    <h2 className="display-4 pb-5 text-center">{heading}</h2>
                    <Row>
                        {
                        <p>test dfsdlfkjsdlkf</p>
                        }
                    </Row>
                </Container>
            </Jumbotron>
        // </section>
    );
};

export default WebClippings;

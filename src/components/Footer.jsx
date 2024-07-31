import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        {/* <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>{" "}
        using <i className="fab fa-react" /> */}
        <p>
          <small className="text-muted">
            Project code is open source and credits to Hashir Shoaeb. Feel free to email me at
          </small>
          <a className="text-decoration-none" href="mailto:mathiasnvd07@gmail.com"> mathiasnvd07@gmail.com</a>.
        </p>
        
      </Container>
    </footer>
  );
};

export default Footer;

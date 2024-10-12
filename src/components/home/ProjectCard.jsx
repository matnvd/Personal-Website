import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";

//manual projectcards (if u want auto check hashir)
const ProjectCard = ({name, description, svn_url}) => {
  // const {
  //   name,
  //   description,
  //   svn_url,
  // } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {/* {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )} */}
          {name ? (
            <CardFooter />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      {/* <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a> */}
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

// const Language = ({ languages_url, repo_url }) => {
//   const [data, setData] = useState([]);

//   const handleRequest = useCallback(async () => {
//     try {
//       const response = await axios.get(languages_url);
//       return setData(response.data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }, [languages_url]);

//   useEffect(() => {
//     handleRequest();
//   }, [handleRequest]);

//   const array = [];
//   let total_count = 0;
//   for (let index in data) {
//     array.push(index);
//     total_count += data[index];
//   }

//   return (
//     <div className="pb-3">
//       Languages:{" "}
//       {array.length
//         ? array.map((language) => (
//           <a
//             key={language}
//             className="card-link"
//             href={repo_url + `/search?l=${language}`}
//             target=" _blank"
//             rel="noopener noreferrer"
//           >
//             <span className="badge bg-light text-dark">
//               {language}:{" "}
//               {Math.trunc((data[language] / total_count) * 1000) / 10} %
//             </span>
//           </a>

//         ))
//         : "code yet to be deployed."}
//     </div>
//   );
// };

const CardFooter = () => {
  return (
    <p className="card-text">
      {/*<a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        { <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span> }
      </a>*/}
      <small className="text-muted">Updated on August 3, 2024</small>
    </p>
  );
};

export default ProjectCard;

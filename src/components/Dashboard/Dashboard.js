import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "../ToDo/ToDo";
import InProgress from "../InProgress/InProgress";
import axios from "axios";

const Dashboard = () => {
  const [allIssues, setaAllIssues] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dashboard")
      .then((resp) => {
        // console.log(resp.data);
        setaAllIssues(() => resp.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-3">
            <ToDo todo={allIssues} />
          </div>
          <div className="col-md-3">
            <InProgress inProgress={allIssues} />
          </div>
          {/* <div className="col-md-3">
            <ToDo />
          </div> */}
          {/* <div className="col-md-3">
            <ToDo />
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

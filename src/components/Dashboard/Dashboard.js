import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "../ToDo/ToDo";
import Issue from "../Issue/Issue";
import InProgress from "../InProgress/InProgress";
import Done from "../Done/Done";
import axios from "axios";

const Dashboard = () => {
  const [allIssues, setaAllIssues] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dashboard")
      .then((resp) => {
        //console.log(resp.data);
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
          <div className="col-md-3">
            <Issue issue={allIssues} />
          </div>
          <div className="col-md-3">
            <Done done={allIssues} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

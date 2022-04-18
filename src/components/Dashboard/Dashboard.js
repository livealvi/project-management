import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "../ToDo/ToDo";

const Dashboard = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-3">
            <ToDo />
          </div>
          <div className="col-md-3">
            <ToDo />
          </div>
          <div className="col-md-3">
            <ToDo />
          </div>
          <div className="col-md-3">
            <ToDo />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

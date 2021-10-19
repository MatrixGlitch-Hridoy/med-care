import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,title, img, description}  = service;
  return (
    <div>
      <div className="col p-2 mb-5">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <Link to={`/service/${id}`}>
          <div className="d-grid">
            <button className="btn btn-primary" type="button">
              See Details
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

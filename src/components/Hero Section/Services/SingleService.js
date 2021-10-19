import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const SingleService = () => {
  let { id } = useParams();
  const [service] = useServices();
  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    const foundService = service.find((ser) => ser.id === id);
    setSingleService(foundService);
  }, [service]);
  return (
    <div>
      <div className="row mx-auto justify-content-center">
      <div className="col-sm-8 p-2 mb-5">
        <div className="card h-25">
          <img src={singleService?.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">{singleService?.title}</h1>
            <p className="card-text">{singleService?.description}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleService;

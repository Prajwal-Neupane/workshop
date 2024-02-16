import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/${data.id}`} className="">
      <h1>{data.name}</h1>
      <p>{data.desc.slice(0, 70)}...</p>
      <img src={data.avatar} alt="avatar" />
    </Link>
  );
};

export default Card;

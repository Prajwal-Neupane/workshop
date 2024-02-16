import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleBlog = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleBlog = async () => {
      const response = await axios.get(
        `https://65cd954ec715428e8b3e9bf0.mockapi.io/reactproject/${id}`
      );
      setBlog(response.data);
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.name}</h1>
          <p>{blog.desc}</p>
          <img src={blog.avatar} alt="avatar" />{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h1>Loading...</h1>{" "}
        </div>
      )}
    </div>
  );
};

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import { SingleBlog } from "./components/SingleBlog";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(
        "https://65cd954ec715428e8b3e9bf0.mockapi.io/reactproject"
      );
      setData(response.data);
    };
    fetchBlog();
  }, []);
  console.log(data);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="card">
            {data ? (
              data.map((items) => {
                return (
                  // <div key={items.id}>
                  //   <h1>{items.name}</h1> <img src={items.avatar} alt="avatar" />
                  // </div>
                  <Card key={items.id} data={items} />
                );
              })
            ) : (
              <h1 className="loading">Loading....</h1>
            )}
          </div>
        }
      />
      <Route path="/:id" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;

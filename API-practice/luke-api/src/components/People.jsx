import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/?format=json`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
        setData({ error: "I dont have an answer" });
      });
  }, [id]);

  return data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <div>
      <h1>Person: {data.name}</h1>
      <h2>Height: {data.height}</h2>
      <h2>Mass: {data.mass}</h2>
      <h2>Skin Color: {data.skin_color}</h2>
      <h2>Hair Color: {data.hair_color}</h2>
    </div>
  );
};
export default People;

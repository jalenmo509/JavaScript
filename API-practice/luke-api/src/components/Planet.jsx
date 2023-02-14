import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planet = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}/?format=json`)

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setData({ error: "I dont have an answer" });
      });
  }, [id]);

  return data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <div>
      <h1>Planet: {data.name}</h1>
      <h2>Climate: {data.climate}</h2>
      <h2>Terrain: {data.terrain}</h2>
      <h2>Surface Water: {data.surface_water}</h2>
      <h2>Population: {data.population}</h2>
    </div>
  );
};
export default Planet;

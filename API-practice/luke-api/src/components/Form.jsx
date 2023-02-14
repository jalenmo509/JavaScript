import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [type, setType] = useState("people");
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/${type}/${id}`);
  };

  return (
    <form onSubmit={search}>
      <label>Search For</label>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <label>Id:</label>
      <input
        type="number"
        value={id}
        min={1}
        onChange={(e) => setId(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
};
export default Form;

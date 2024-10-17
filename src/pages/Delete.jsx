import { useState } from "react";
import { deletePerson } from "../services/api";
const Delete = () => {
  const [id, setId] = useState();
  const handleClickDelete = () => {
    deletePerson(id);
    alert("Person deleted!");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleClickDelete}>Baja</button>
      <br />
      <br />
      <button onClick={() => (location.href = "http://localhost:5173")}>
        Home
      </button>
    </div>
  );
};

export default Delete;

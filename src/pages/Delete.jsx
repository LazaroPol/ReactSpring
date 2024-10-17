import { useState } from "react";
import { deletePerson } from "../services/api";
const Delete = () => {
  const [id, setId] = useState();
  const handleClickDelete = () => {
    deletePerson(id);
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
    </div>
  );
};

export default Delete;

import { useState } from "react";
import { savePersonName } from "../services/api";

const Create = () => {
  const [name, setName] = useState();
  const handleClickInsert = () => {
    savePersonName({ name });
    alert("Person created!");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClickInsert}>Alta</button>
      <br />
      <br />
      <button onClick={() => (location.href = "http://localhost:5173")}>
        Home
      </button>
    </div>
  );
};

export default Create;

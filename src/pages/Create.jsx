import { useState } from "react";
import { savePersonName } from "../services/api";

const Create = () => {
  const [name, setName] = useState();
  const handleClickInsert = () => {
    savePersonName({ name });
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
    </div>
  );
};

export default Create;

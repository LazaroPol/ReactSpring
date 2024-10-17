import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPersons } from "../services/api";

const Select = () => {
  const [persons, setPersons] = useState([]);
  const handleClickSelect = async () => {
    const personList = await getPersons();
    setPersons(personList.data);
  };
  useEffect(() => {
    //Llamamos a la funcion de api.js y cuando se ejecute, se ejecuta la funcion setCharacter
    getPersons(setPersons);
  }, []);
  return (
    <>
      <div>
        <h1>Select your option!</h1>
        <ul>
          <button
            onClick={() => (location.href = "http://localhost:5173/create/")}
          >
            Create person
          </button>
          <br />
          <br />
          <button
            onClick={() => (location.href = "http://localhost:5173/delete/")}
          >
            Delete person
          </button>
          <br />
          <br />
          <button onClick={handleClickSelect}>Select persons</button>
        </ul>

        <h3>Person list</h3>

        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.id} - {person.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;

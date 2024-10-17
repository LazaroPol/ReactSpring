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
        <ul>
          <br />
          <Link className="link" to={"/delete/"}>
            Delete
          </Link>
          <br />
          <Link className="link" to={"/create/"}>
            Create
          </Link>
        </ul>
        <button onClick={handleClickSelect}>Consulta</button>
        <h3>Lista de Personas</h3>

        <ul>
          {persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;

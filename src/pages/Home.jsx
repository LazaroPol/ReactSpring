import { useEffect, useState } from "react";
import { getPersons } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [person, setPerson] = useState([]);

  // EL useEffect se ejecuta solo cuando se monta el componente
  useEffect(() => {
    //Llamamos a la funcion de api.js y cuando se ejecute, se ejecuta la funcion setCharacter
    getPersons(setPerson);
  }, []);

  return (
    <>
      <br />
      <div className="container">
        {person.map((person) => (
          // Sintaxis para pasar la id dinamicamente: <Link to={`/page2/${character.id}`}>{character.name}</Link>
          <div key={person.id}>
            <ul>
              <Link className="link" to={"/select/"}>
                Select
              </Link>
              <Link className="link" to={"/delete/"}>
                Delete
              </Link>
              <Link className="link" to={"/create/"}>
                Create
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

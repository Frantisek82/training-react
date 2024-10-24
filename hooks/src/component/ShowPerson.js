// import './ShowPerson.css';
import { useState } from "react";

function ShowPerson() {
  const [person, setPersonInfo] = useState({
    name: "John",
    age: 27,
    enemy: ["Skynet, ", "T-800, ", "T-1000, ", "T-x"],
    father: "unknown",
  });

  const updateFather = () => {
    setPersonInfo((previousState) => {
      return {
        ...previousState,
        father: "Kyle Reese",
      };
    });
  };

  return (
    <div>
      <h1>&lt;&#60;CHARACTER INFO&#62;&gt;</h1>
      <h2>NAME: {person.name}</h2>
      <h2>AGE: {person.age}</h2>
      <h2>ENEMY: {person.enemy}</h2>
      <h2>FATHER: {person.father}</h2>
      <button type="button" onClick={updateFather}>
        UPDATE
      </button>
    </div>
  );
}

export default ShowPerson;

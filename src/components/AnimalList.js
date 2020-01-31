import React, { useEffect, useState } from "react";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("useEffect")
    fetch(
      'https://raw.githubusercontent.com/brendalong/react-hooks-101/master/src/db/data.json'
    )
      .then(res => res.json())
      .then((parsedResult) => {
        setAnimals(parsedResult.animals)
      })
  }, [])
  //Try adding ‘editMode’ as a dependency to the useEffect?
  //Notice the console log flow in the dev tools
  //useEffect is called each time.

  const changeEditMode = () => {
    const newMode = editMode ? false : true;
    console.log("newMode", newMode);
    setEditMode(newMode);
  }
//add to the AnimalList
  return (
    <>
      <h2>Animal List</h2>
      {console.log("in the return")}
      {animals.map((animal) => (
        <div key={animal.id}>
          <h3>{animal.name}</h3>
          <p>Breed: {animal.breed}</p>
        </div>
      ))}
      <button onClick={() => changeEditMode()}>{(editMode ? "Close Edit Modal" : "Open Edit Modal")}</button>
    </>
  )
}
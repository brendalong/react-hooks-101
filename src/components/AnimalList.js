import React, { useEffect, useState } from "react";

const remoteURL = "http://localhost:5000";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [editMode, setEditMode] = useState(false);

  //effects happen “after render”
  useEffect(() => {
    console.log("useEffect")
    fetch(`${remoteURL}/animals`)
      .then(result => result.json())
      .then((parsedResult) => {
        setAnimals(parsedResult)
      })
  }, [])


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
        <h3 key={animal.id}>{animal.name}</h3>
      ))}
      <button onClick={() => changeEditMode()}>{(editMode ? "Close Edit Modal" : "Open Edit Modal")}</button>

    </>
  )

}
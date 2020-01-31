import React, {useState} from 'react';
import UnloadExample from './UnloadExample';

function Header(props) {
  const [activityArray, setActivity] = useState([
    { name: 'Float Trips' },
    { name: 'Fishing Excursion' },
    { name: 'Wildlife Photography' },]);

  const [color, setColor] = useState("red");

  function handleAddOne() {
    const newObj = { name: "Rafting" };
    setActivity([...activityArray, newObj]);
  }

  const [loaded, setLoaded] = useState(false);

  function handleChangeLoaded() {
    const updateloaded = loaded ? false : true;
    setLoaded(updateloaded);
  };


  return (
    <nav>
      <h2>Exploring the Snake River
         <small> with {props.guideName}</small></h2>
         {color}
      <ul>
        {activityArray.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}

      </ul>
      <button onClick={() => { handleAddOne() }} >Add One</button>
      <div>
        {loaded ? <UnloadExample /> :null}
        <button onClick={() => { handleChangeLoaded() }} >{loaded ? "Unload Component" : "Load Component"}</button>
      </div>
    </nav>
  )
}
export default Header;
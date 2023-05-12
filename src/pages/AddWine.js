import { useState } from 'react'
import axios from 'axios';

const API_URL = "http://localhost:3000";

function AddWine(props) {
  const [wine, setWine] = useState({
    name: '',
    type: '',
    attributes: {
      acidity: '',
      sweetness: '',
      alcohol: '',
      age: '',
      structure: '',
      finish: '',
      tannins: '',
      fruitLevel: '',
    },
    variety: '',
    region: '',
  });

  const requestBody = {
    name: wine.name,
    type: wine.type,
    attributes: {
      acidity: wine.attributes.acidity,
      sweetness: wine.attributes.sweetness,
      alcohol: wine.attributes.alcohol,
      age: wine.attributes.age,
      structure: wine.attributes.structure,
      finish: wine.attributes.finish,
      tannins: wine.attributes.tannins,
      fruitLevel: wine.attributes.fruitLevel
    },
    variety: wine.variety,
    region: wine.region
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  axios
    .post(`${API_URL}/winelistdetailspage/wine`, requestBody)
    .then((response) => {
      setWine({
        name: (""),
        type: (""),
        attributes: {
          acidity: (""),
          sweetness: (""),
          alcohol: (""),
          age: (""),
          structure: (""),
          finish: (""),
          tannins: (""),
          fruitLevel: ("")
        },
        variety: (""),
        region: ("")
      })
    })

  return (
    <div>
      <h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type="text"
            name="name"
            value={wine.name}
            onChange={(e) => setWine.name(e.target.value)}>
          </input>
          <label htmlFor='type'>Type:</label>
          <input
            type="text"
            name="type"
            value={wine.type}
            onChange={(e) => setWine.type(e.target.value)}>
          </input>
          <h3>Attributes:</h3>
          <label htmlFor='acidity'>Acidity:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.acidity}
            onChange={(e) => setWine.attributes.acidity(e.target.value)}>
          </input>
          <label htmlFor='sweetness'>Sweetness:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.sweetness}
            onChange={(e) => setWine.attributes.sweetness(e.target.value)}>
          </input>
          <label htmlFor='alcohol'>Alcohol:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.alcohol}
            onChange={(e) => setWine.attributes.alcohol(e.target.value)}>
          </input>
          <label htmlFor='age'>Age:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.age}
            onChange={(e) => setWine.attributes.age(e.target.value)}>
          </input>
          <label htmlFor='structure'>Structure:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.structure}
            onChange={(e) => setWine.structure(e.target.value)}>
          </input>
          <label htmlFor='finish'>Finish:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.finish}
            onChange={(e) => setWine.attributes.finish(e.target.value)}>
          </input>
          <label htmlFor='tannins'>Tannins:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.tannins}
            onChange={(e) => setWine.attributes.tannins(e.target.value)}>
          </input>
          <label htmlFor='fruitlevel'>Fruit Level:</label>
          <input
            type="text"
            name="type"
            value={wine.attributes.fruitLevel}
            onChange={(e) => setWine.attributes.fruitLevel(e.target.value)}>
          </input>
          <br>
          </br>
          <label htmlFor='variety'>Variety:</label>
          <input
            type="text"
            name="type"
            value={wine.variety}
            onChange={(e) => setWine.variety(e.target.value)}>
          </input>
          <label htmlFor='age'>Age:</label>
          <input
            type="text"
            name="type"
            value={wine.region}
            onChange={(e) => setWine.region(e.target.value)}>
          </input>
          <button type="submit">Add Wine</button>
        </form>
      </h1>
    </div>
  )
}
export default AddWine;
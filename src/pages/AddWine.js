import { useState } from 'react'
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

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
    .post(`${API_URL}/wine-list`, requestBody)
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
    <div className="container">
      <div className="row">
        <div className="wine-form col-12">
          <h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name' className='add-wine-label'>Name:</label>
              <input
                type="text"
                name="name"
                className="add-wine-input"
                value={wine.name}
                onChange={(e) => setWine.name(e.target.value)}>
              </input>
              <label htmlFor='type' className='add-wine-label'>Type:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.type}
                onChange={(e) => setWine.type(e.target.value)}>
              </input>
              <h2 className='attributes-label'>Attributes:</h2>
              <label htmlFor='acidity' className='add-wine-label'>Acidity:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.acidity}
                onChange={(e) => setWine.attributes.acidity(e.target.value)}>
              </input>
              <label htmlFor='sweetness' className='add-wine-label'>Sweetness:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.sweetness}
                onChange={(e) => setWine.attributes.sweetness(e.target.value)}>
              </input>
              <label htmlFor='alcohol' className='add-wine-label'>Alcohol:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.alcohol}
                onChange={(e) => setWine.attributes.alcohol(e.target.value)}>
              </input>
              <label htmlFor='age' className='add-wine-label'>Age:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.age}
                onChange={(e) => setWine.attributes.age(e.target.value)}>
              </input>
              <label htmlFor='structure' className='add-wine-label'>Structure:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.structure}
                onChange={(e) => setWine.structure(e.target.value)}>
              </input>
              <label htmlFor='finish' className='add-wine-label'>Finish:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.finish}
                onChange={(e) => setWine.attributes.finish(e.target.value)}>
              </input>
              <label htmlFor='tannins' className='add-wine-label'>Tannins:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.tannins}
                onChange={(e) => setWine.attributes.tannins(e.target.value)}>
              </input>
              <label htmlFor='fruitlevel' className='add-wine-label'>Fruit Level:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.attributes.fruitLevel}
                onChange={(e) => setWine.attributes.fruitLevel(e.target.value)}>
              </input>
              <br>
              </br>
              <label htmlFor='variety' className='add-wine-label'>Variety:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.variety}
                onChange={(e) => setWine.variety(e.target.value)}>
              </input>
              <label htmlFor='age' className='add-wine-label'>Age:</label>
              <input
                type="text"
                name="type"
                className="add-wine-input"
                value={wine.region}
                onChange={(e) => setWine.region(e.target.value)}>
              </input>
              <button type="submit" className='add-wine-button'>Add Wine</button>
            </form>
          </h1>
        </div>
      </div>
    </div>
  )
}
export default AddWine;
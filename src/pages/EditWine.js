import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function EditWine(props) {
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

  useEffect(() => {
    axios.get(`${API_URL}/wine-list/${props.wineId}`)
      .then((response) => {
        setWine(response.data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, [props.wineId])

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: wine.name,
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
    };

    axios.put(`${API_URL}/winelistdetailspage/wine/${props.wineId}`, requestBody)
      .then((response) => {
        console.log("Wine updated successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="wine-form col-12">
          <h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name' className='editWineLabel'>Name:</label>
              <input
                type="text"
                name="name"
                className="editWineInput"
                value={wine.name}
                onChange={(e) => setWine.name(e.target.value)}>
              </input>
              <label htmlFor='type' className='editWineLabel'>Type:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.type}
                onChange={(e) => setWine.type(e.target.value)}>
              </input>
              <h2 className='attributesLabel'>Attributes:</h2>
              <label htmlFor='acidity' className='editWineLabel'>Acidity:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.acidity}
                onChange={(e) => setWine.attributes.acidity(e.target.value)}>
              </input>
              <label htmlFor='sweetness' className='editWineLabel'>Sweetness:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.sweetness}
                onChange={(e) => setWine.attributes.sweetness(e.target.value)}>
              </input>
              <label htmlFor='alcohol' className='editWineLabel'>Alcohol:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.alcohol}
                onChange={(e) => setWine.attributes.alcohol(e.target.value)}>
              </input>
              <label htmlFor='age' className='editWineLabel'>Age:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.age}
                onChange={(e) => setWine.attributes.age(e.target.value)}>
              </input>
              <label htmlFor='structure' className='editWineLabel'>Structure:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.structure}
                onChange={(e) => setWine.structure(e.target.value)}>
              </input>
              <label htmlFor='finish' className='editWineLabel'>Finish:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.finish}
                onChange={(e) => setWine.attributes.finish(e.target.value)}>
              </input>
              <label htmlFor='tannins' className='editWineLabel'>Tannins:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.tannins}
                onChange={(e) => setWine.attributes.tannins(e.target.value)}>
              </input>
              <label htmlFor='fruitlevel' className='editWineLabel'>Fruit Level:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.attributes.fruitLevel}
                onChange={(e) => setWine.attributes.fruitLevel(e.target.value)}>
              </input>
              <br>
              </br>
              <label htmlFor='variety' className='editWineLabel'>Variety:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.variety}
                onChange={(e) => setWine.variety(e.target.value)}>
              </input>
              <label htmlFor='age' className='editWineLabel'>Age:</label>
              <input
                type="text"
                name="type"
                className="editWineInput"
                value={wine.region}
                onChange={(e) => setWine.region(e.target.value)}>
              </input>
              <button type="submit" className='editWineButton'>edit Wine</button>
            </form>
          </h1>
        </div>
      </div>
    </div>
  )

}
export default EditWine;
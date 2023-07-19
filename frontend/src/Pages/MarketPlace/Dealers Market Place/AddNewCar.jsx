import React, { useState } from 'react';
import './AddNewCar.css';
import { useDispatch } from 'react-redux';
import { dealerAddCar } from '../../../Redux/DelarReducer/action';
const initialState = {
  img: '',
  model_name: '',
  year_of_model: '',
  list_price: '',
  available_colors: [],
  mileage: '',
  power_bhp: '',
  max_speed: '',
}
const AddNewCar = () => {
  const [carData, setCarData] = useState(initialState);
  const dispatch = useDispatch();
  let { img, model_name, year_of_model, list_price, available_colors, mileage, power_bhp, max_speed } = carData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newVal;

    if (name === "available_colors") {
      newVal = value.split(','); // Split on commas, not spaces
    } else if (name === "year_of_model" || name === "list_price" || name === "mileage" || name === "power_bhp" || name === "max_speed") {
      newVal = +value; // Convert to numbers for numeric fields
    } else {
      newVal = value;
    }

    setCarData({
      ...carData,
      [name]: newVal,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    available_colors = available_colors[0].split(' ')
    const payload = { img, model_name, year_of_model, list_price, available_colors, mileage, power_bhp, max_speed }

    console.log(payload);

    dispatch(dealerAddCar(payload));

  };

  return (
    <div className="add-new-car-container">
      <h1>Add New Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="img" value={carData.img} onChange={handleChange} />
        </label>
        <br />
        <label>
          Model Name:
          <input type="text" name="model_name" value={carData.model_name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Year of Model:
          <input type="number" name="year_of_model" value={carData.year_of_model} onChange={handleChange} />
        </label>
        <br />
        <label>
          List Price:
          <input type="number" name="list_price" value={carData.list_price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Available Colors:
          <input
            type="text"
            name="available_colors"
            value={carData.available_colors}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mileage:
          <input type="number" name="mileage" value={carData.mileage} onChange={handleChange} />
        </label>
        <br />
        <label>
          Power (bhp):
          <input type="number" name="power_bhp" value={carData.power_bhp} onChange={handleChange} />
        </label>
        <br />
        <label>
          Max Speed:
          <input type="number" name="max_speed" value={carData.max_speed} onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewCar;

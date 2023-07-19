import React, { useState } from 'react';
import './CarInfoPage.css'; // Create a CarInfoPage.css file for styling
import { useDispatch } from 'react-redux';
import { marketplaceAdd } from '../../../Redux/DelarReducer/action';
import { useParams } from 'react-router-dom';

const UpdateCar = () => {
    const dispatch = useDispatch();
  const [carInfo, setCarInfo] = useState({
    totalKms: '',
    majorScratches: '',
    originalPaint: false,
    numberofAccidentsReported: '',
    numberofPreviousBuyers: '',
    registrationPlace: '',
  });
const {id} = useParams();
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    let newValue = type === 'checkbox' ? e.target.checked : value;

    if (name === "totalKms" || name === "numberofAccidentsReported" || name === "numberofPreviousBuyers") {
        newValue = +value;
    }
    setCarInfo({
      ...carInfo,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to handle form submission here
    console.log(carInfo);
    dispatch(marketplaceAdd(carInfo,id));
  };

  return (
    <div className="car-info-container">
      <h1>Car Information Page</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Total Kilometers:
          <input type="number" name="totalKms" value={carInfo.totalKms} onChange={handleChange} />
        </label>
        <br />
        <label>
          Major Scratches:
          <input
            type="text"
            name="majorScratches"
            value={carInfo.majorScratches}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Original Paint:
          <input
            type="checkbox"
            name="originalPaint"
            checked={carInfo.originalPaint}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Accidents Reported:
          <input
            type="number"
            name="numberofAccidentsReported"
            value={carInfo.numberofAccidentsReported}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Previous Buyers:
          <input
            type="number"
            name="numberofPreviousBuyers"
            value={carInfo.numberofPreviousBuyers}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Registration Place:
          <input
            type="text"
            name="registrationPlace"
            value={carInfo.registrationPlace}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateCar;

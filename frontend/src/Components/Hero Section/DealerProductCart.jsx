import React from 'react';
import './ProductsCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCarByDealer } from '../../Redux/DelarReducer/action';
const DealerProductCart = ({
  model_name,
  year_of_model,
  mileage,
  power_bhp,
  max_speed,
  available_colors,
  list_price,
  dealer_name,
  dealer_email,
  img,
  _id
}) => {


const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(deleteCarByDealer(_id))
    }
  return (
    <div className="products-card">
      <img src={img} alt={model_name} />
      <h2>{model_name}</h2>
      <p>Year: {year_of_model}</p>
      <p>Mileage: {mileage}</p>
      <p>Power (BHP): {power_bhp}</p>
      <p>Max Speed: {max_speed}</p>
      <p>Available Colors: {available_colors.join(', ')}</p>
      <p>List Price: {list_price}</p>
      <p>Dealer Name: {dealer_name}</p>
      <p>Dealer Email: {dealer_email}</p>
      <br />
      <button className="buy-button"><Link to={`/marketplace/${_id}`} style={{ textDecoration: "none", color: "white" }}>Buy Now</Link></button>
      <br />
      <br />
      <button onClick={handleDelete} >Delete</button>
      <br />
      <br />
      <button><Link to={`/update/${_id}`} style={{ textDecoration: "none", color: "white" }}>Update</Link></button>

    </div>
  );
};

export default DealerProductCart;

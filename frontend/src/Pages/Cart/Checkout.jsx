import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
//import Products from '../MarketPlace/User Market Place/Products';

const Checkout = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://attryb-skg1.onrender.com/cardata`)
      .then((res) => {
      //  console.log(res.data);
        setData(res.data.data)
      })
      .catch((err) => {
       // console.log(err);
      });
  }, []);

  // Find the data for the specific product based on the ID
  const mainData = data.find(el => el._id === id);

  // Check if mainData is available before rendering the component
  if (!mainData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-card">
      <img src={mainData.img} alt={mainData.model_name} />
      <h2>{mainData.model_name}</h2>
      <p>Year: {mainData.year_of_model}</p>
      <p>Mileage: {mainData.mileage}</p>
      <p>Power (BHP): {mainData.power_bhp}</p> {/* Fixed the variable name here */}
      <p>Max Speed: {mainData.max_speed}</p>
      <p>Available Colors: {mainData.available_colors.join(', ')}</p>
      <p>List Price: {mainData.list_price}</p>
      <p>Dealer Name: {mainData.dealer_name}</p>
      <p>Dealer Email: {mainData.dealer_email}</p>
      <button className="buy-button"><Link to={`/payment`} style={{textDecoration:"none" , color:"white"}}>Order Now</Link></button>
      <br />
      <br />
      <button className="buy-button" >See More!</button>
    </div>
  );
};

export default Checkout;

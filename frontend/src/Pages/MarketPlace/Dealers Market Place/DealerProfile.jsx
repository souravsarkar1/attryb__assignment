import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dealerGetCars } from '../../../Redux/DelarReducer/action';
import './DealerProfile.css'
import { Link } from 'react-router-dom';
import DealerProductCart from '../../../Components/Hero Section/DealerProductCart';

const DealerProfile = () => {
    const dispatch = useDispatch();
    const data = useSelector(st=>st.dealerReducer.dealerData);
    
    console.log(data);
    useEffect(()=>{
        dispatch(dealerGetCars());
    },[dispatch]);
    
  return (
    <div style={{margin : "10px", padding : "10px"}}>
    <br />
    <br />
    <h1>Add A new Car <Link to={'/addnewcar'}>Click Here</Link></h1>
    <h2>Your Products</h2>
    <div className='car-container'>
      {data?.map((car)=>(
        <DealerProductCart key={car._id} {...car}/>
      ))}
    </div>
    </div>

  )
}

export default DealerProfile

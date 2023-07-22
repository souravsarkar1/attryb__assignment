import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dealerGetCars, deleteCarByDealer } from '../../../Redux/DelarReducer/action';
import './DealerProfile.css'
import { Link } from 'react-router-dom';
import DealerProductCart from '../../../Components/Hero Section/DealerProductCart';
//import Cookies from 'js-cookie';
//import Cookies from 'js-cookie';

const DealerProfile = () => {
    const dispatch = useDispatch();
    const data = useSelector(st=>st.dealerReducer.dealerData);
    const [flag,setFlag] = useState(true);
    const token = useSelector(st=>st.dealerAuthReducer.token);
   // console.log(token);
   //console.log(Cookies);
    useEffect(()=>{
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    },[]);
   // console.log(data);
    useEffect(()=>{
        dispatch(dealerGetCars());
    },[dispatch]);


    const handleDelete = (id)=>{
      dispatch(deleteCarByDealer(id)).then((res)=>{
        dispatch(dealerGetCars());
      })
  }
    if(flag){
      return <h1>Loading...</h1>
    }
  return (
    <div style={{margin : "10px", padding : "10px"}}>
    <br />
    <br />
   <h1> {token ? `Wel Come ${token}` : null}</h1>
    <h1>Add A new Car <Link to={'/addnewcar'}>Click Here</Link></h1>
    <h2>Your Products {data.length}</h2>
  <h2>{data.length === 0 ? "Please Add Some Products" : null}</h2>  
    <div className='car-container'>
      {data?.map((car)=>(
        <DealerProductCart key={car._id} {...car} handleDelete = {handleDelete}/>
      ))}
    </div>
    </div>

  )
}

export default DealerProfile

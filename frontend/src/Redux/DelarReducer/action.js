import axios from "axios";
import { DEALERADDCARFAIL, DEALERADDCARREQUEST, DEALERADDCARSUCESSFUL, DEALERDELETECARFAIL, DEALERDELETECARREQUEST, DEALERDELETECARSUCESSFUL, DEALERFETCARFAIL, DEALERFETCARREQUEST, DEALERFETCARSUCESSFUL, DEALERGETDETEALSCARFAIL, DEALERGETDETEALSCARREQUEST, DEALERGETDETEALSCARSUCESSFUL, DEALERUPDATENEWVALUECARFAIL, DEALERUPDATENEWVALUECARREQUEST, DEALERUPDATENEWVALUECARSUCESSFUL } from "./actionTypes"
import Cookies from "js-cookie";
//import Cookies from "js-cookie";

export const dealerAddCar = (data) => (dispatch) => {
    let dealerAddCarMsg ;
    const token = Cookies.get("dealerToken")
    dispatch({ type: DEALERADDCARREQUEST });
 return   axios.post(`https://attryb-skg1.onrender.com/cardata/add`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {

        console.log(res.data);
        dispatch({ type: DEALERADDCARSUCESSFUL });
        dealerAddCarMsg = res.data.msg;
    }).catch((err) => {
        dispatch({ type: DEALERADDCARFAIL });
        console.log(err);
        dealerAddCarMsg = err.response;
    }).finally(()=>{
        Cookies.set("dealerAddCarMsg",dealerAddCarMsg);
    })
}

export const dealerGetCars = () => (dispatch) => {
    const token = Cookies.get("dealerToken")
    dispatch({ type: DEALERFETCARREQUEST });

    // Get the token from the cookie
   // const token = localStorage.getItem("dealerToken")

    // Set the Authorization header correctly with the "Bearer" keyword
    axios.get(`https://attryb-skg1.onrender.com/cardata/data`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        dispatch({ type: DEALERFETCARSUCESSFUL, payload: res.data.data });
      //  console.log(res.data.data);
    }).catch((err) => {
        dispatch({ type: DEALERFETCARFAIL });
    });
};


export const deleteCarByDealer = (id) => (dispatch) => {
  //  const token = localStorage.getItem("dealerToken")
  const token = Cookies.get("dealerToken")
    dispatch({ type: DEALERDELETECARREQUEST });
    return axios.delete(`https://attryb-skg1.onrender.com/cardata/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => {
       // console.log(res);
        dispatch({ type: DEALERDELETECARSUCESSFUL });
    }).catch((err) => {
        dispatch({ type: DEALERDELETECARFAIL });
     //   console.log(err);
    })
}

export const marketplaceAdd = (data,id)=>(dispatch)=>{
dispatch({type: DEALERUPDATENEWVALUECARREQUEST })

    axios.post(`https://attryb-skg1.onrender.com/marketplace/add`,data,{
        headers: {
            Authorization: `Bearer ${id}`,
            "Content-Type": "application/json",
        },
    }).then((res)=>{
       // console.log(res.data);
        dispatch({type : DEALERUPDATENEWVALUECARSUCESSFUL});
    }).catch((err)=>{
        dispatch({type : DEALERUPDATENEWVALUECARFAIL});
    })
}

export const marketplaceGetCar = (id)=>(dispatch)=>{
    dispatch({type : DEALERGETDETEALSCARREQUEST});
    axios.get(`https://attryb-skg1.onrender.com/marketplace`,{
        headers: {
            Authorization: `Bearer ${id}`,
            "Content-Type": "application/json",
        },
    }).then((res)=>{
       // console.log(res.data.carsDeteals);
        dispatch({type :DEALERGETDETEALSCARSUCESSFUL, payload : res.data.carsDeteals});
    }).catch((err)=>{
      //  console.log(err);
        dispatch({type : DEALERGETDETEALSCARFAIL})
    })
}
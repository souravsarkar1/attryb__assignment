import Cookies from "js-cookie";
import { USERLOGINFAIL, USERLOGINREQUEST, USERLOGINSUCESSFUL, USERSIGNUPFAIL, USERSIGNUPREQUEST, USERSIGNUPSUCESSFUL } from "./ationTypes"
import axios from 'axios';

export const userLogin = (data)=>(dispatch)=>{
dispatch({type : USERLOGINREQUEST});
 return axios.post(`https://attryb-skg1.onrender.com/users/login`,data).then((res)=>{
   console.log(res.data);
   Cookies.set("userName",)
   Cookies.set("userToken",res.data.token);
    dispatch({type : USERLOGINSUCESSFUL,payload : res.data.token})
}).catch((err)=>{
    dispatch({type : USERLOGINFAIL});
  //  console.log(err);
})
}
export const userSignup = (data)=>(dispatch)=>{
  let userMsg ;
dispatch({type : USERSIGNUPREQUEST});
 return axios.post(`https://attryb-skg1.onrender.com/users/register`,data).then((res)=>{
   console.log(res.data.mag);
   userMsg = res.data.msg;
    dispatch({type : USERSIGNUPSUCESSFUL, payload : res.data.msg })
}).catch((err)=>{
    dispatch({type : USERSIGNUPFAIL , payload : err.response.data.error});
    Cookies.set("isExist","exist");
    console.log(err.response.data.error);
    userMsg = err.response.data.error;
}).finally(()=>{
  //console.log("gg");
  localStorage.setItem("userSignupMsg", userMsg);
  Cookies.set("userSignupMsg",userMsg);
})
}
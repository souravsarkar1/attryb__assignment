import { USERLOGINFAIL, USERLOGINREQUEST, USERLOGINSUCESSFUL, USERSIGNUPFAIL, USERSIGNUPREQUEST, USERSIGNUPSUCESSFUL } from "./ationTypes"
import axios from 'axios';

export const userLogin = (data)=>(dispatch)=>{
dispatch({type : USERLOGINREQUEST});
 return axios.post(`https://attryb-skg1.onrender.com/users/login`,data).then((res)=>{
    console.log(res.data.token);
    dispatch({type : USERLOGINSUCESSFUL,payload : res.data.token})
}).catch((err)=>{
    dispatch({type : USERLOGINFAIL});
    console.log(err);
})
}
export const userSignup = (data)=>(dispatch)=>{
dispatch({type : USERSIGNUPREQUEST});
 return axios.post(`https://attryb-skg1.onrender.com/users/register`,data).then((res)=>{
    console.log(res.data);
    dispatch({type : USERSIGNUPSUCESSFUL})
}).catch((err)=>{
    dispatch({type : USERSIGNUPFAIL});
    console.log(err);
})
}
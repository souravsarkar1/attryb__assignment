import axios from 'axios';
import Cookies from 'js-cookie';
import { DEALERLOGINFAIL, DEALERLOGINREQUEST, DEALERLOGINSUCESSFUL, DEALERSIGNUPFAIL, DEALERSIGNUPREQUEST, DEALERSIGNUPSUCESSFUL } from './ationTypes';

export const dealerLogin = (data) => (dispatch) => {
    dispatch({ type: DEALERLOGINREQUEST });
    return axios.post(`https://attryb-skg1.onrender.com/dealer/login`, data).then((res) => {

        console.log(res.data);
        Cookies.set('dealerToken', res.data.token, { expires: 7 });
       // localStorage.setItem("dealerToken", res.data.token);
        //  console.log(Cookies.get('dealerToken'));
        dispatch({ type: DEALERLOGINSUCESSFUL, payload: res.data.name })
    }).catch((err) => {
        dispatch({ type: DEALERLOGINFAIL });
        // console.log(err);
    })
}
export const dealerSignup = (data) => (dispatch) => {
    let dealerMsg;
    dispatch({ type: DEALERSIGNUPREQUEST });
    return axios.post(`https://attryb-skg1.onrender.com/dealer/register`, data).then((res) => {
        // console.log(res.data);
        dealerMsg = res.data.msg;
        dispatch({ type: DEALERSIGNUPSUCESSFUL })
    }).catch((err) => {
        dispatch({ type: DEALERSIGNUPFAIL });
        //  console.log(err);
        dealerMsg = err.response.data.error;
    }).finally(() => {
        Cookies.set("dealerMsg", dealerMsg);
    })
}
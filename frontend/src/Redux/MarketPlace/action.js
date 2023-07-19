import axios from "axios";
import { GETCARDATAFORMARKETPLACEREQUEST, GETCARDATAFORMARKETPLACERFAIL, GETCARDATAFORMARKETPLACESUCESSFUL } from "./actioTypes"

export const getcarDataForMarketPlace = ()=>(dispatch)=>{
    dispatch({type : GETCARDATAFORMARKETPLACEREQUEST});
    axios.get(`https://attryb-skg1.onrender.com/cardata`).then((res)=>{
        console.log(res.data);
        dispatch({type : GETCARDATAFORMARKETPLACESUCESSFUL,payload : res.data.data});
    }).catch((err)=>{
        dispatch({type : GETCARDATAFORMARKETPLACERFAIL});
        console.log(err);
    })
}
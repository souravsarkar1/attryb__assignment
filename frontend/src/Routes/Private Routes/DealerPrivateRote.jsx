import {useSelector} from 'react-redux'

import {Navigate, useLocation} from 'react-router-dom'
const DealerPrivateRoute = ({children}) => {
  const isAuth = useSelector(st=>st.dealerAuthReducer.isAuth);
  const location = useLocation();
  if(!isAuth){
    return <Navigate state={location.pathname} to={'/login'}/>
 }
 return children;
};
export default DealerPrivateRoute;
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Authentication/User/Login'
import SignupPage from '../Pages/Authentication/User/Signup'
import DealerSignupPage from '../Pages/Authentication/Dealer/Signup'
import DealerLoginPage from '../Pages/Authentication/Dealer/Login'
import Home from '../Pages/Home/Home'
import Products from '../Pages/MarketPlace/User Market Place/Products'
import AddNewCar from '../Pages/MarketPlace/Dealers Market Place/AddNewCar'
import DealerProfile from '../Pages/MarketPlace/Dealers Market Place/DealerProfile'
import DealerPrivateRoute from './Private Routes/DealerPrivateRote'
import UserPrivateRoute from './Private Routes/UserPrivateRoutes'
import Checkout from '../Pages/Cart/Checkout'
import PaymentOptions from '../Pages/Cart/Payment'
import CashOnDelivery from '../Pages/Cart/CahsonDelivery'
import OnlinePayment from '../Pages/Cart/OnlinePayment'
import UpdateCar from '../Pages/MarketPlace/Dealers Market Place/UpdateCar'
import SingleCar from '../Pages/MarketPlace/User Market Place/SingleCar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/dealer' element={<DealerSignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/dealer' element={<DealerLoginPage />} />
        <Route path='marketplace' element={<Products />} />
        <Route path='/addnewcar' element={<DealerPrivateRoute><AddNewCar /></DealerPrivateRoute>} />
        <Route path='/dealerprofile' element={<DealerPrivateRoute><DealerProfile /></DealerPrivateRoute>} />
        <Route path='/marketplace/:id' element={<UserPrivateRoute><Checkout/></UserPrivateRoute>}/>
        <Route path='/payment' element={<UserPrivateRoute><PaymentOptions/></UserPrivateRoute>}/>
        <Route path='/cash-on-delivery' element={<UserPrivateRoute><CashOnDelivery/></UserPrivateRoute>}/>
        <Route path='/online-payment' element={<UserPrivateRoute><OnlinePayment/></UserPrivateRoute>}/>
        <Route path='/update/:id' element={<DealerPrivateRoute><UpdateCar/></DealerPrivateRoute>}/>
        <Route path='/singlecar/:id' element={<SingleCar/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

import './App.css';
import Footer from './Components/Footer/Footer';
//import LogoutButton from './Components/Header/LogoutButton';
import Navbar from './Components/Header/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App" style={{display : "flex",flexDirection : 'column'}}>
    <div style={{position : "fixed",width : "100%"}}>
    <Navbar/>
    </div>
   
    <br />
    <br />
    <br />
    <div style={{margin :"20px" , padding :"20px"}}>
    <AllRoutes/>
    </div>
     
     <br />
     <br />
     <Footer/>
    </div>
  );
}

export default App;

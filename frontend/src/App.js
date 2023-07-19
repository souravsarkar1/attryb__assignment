import './App.css';
import Footer from './Components/Footer/Footer';
import LogoutButton from './Components/Header/LogoutButton';
import Navbar from './Components/Header/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <div style={{position : "fixed",width : "100%"}}>
    <Navbar/>
    </div>
    <LogoutButton/>
    <br />
    <br />
    <br />
    <div style={{margin : "10px auto 10px auto"}}>
    <AllRoutes/>
    </div>
     
     <br />
     <br />
     <Footer/>
    </div>
  );
}

export default App;

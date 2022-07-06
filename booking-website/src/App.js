
import './App.css';
import { Appointment } from "./components/Appointment";
import Navbar from './Layout/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Layout/Footer';
import Aboutus from './components/About-us';
import ServiceDetails from './components/service-details';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
  <Routes>
      
      <Route path='/appointment' element={<Appointment />}/>




{/* about us page */}
<Route path='about' element={<Aboutus/>} />


{/* service-datails  page */}
<Route path='service-datails' element={<ServiceDetails/>} />
      </Routes>
      <Footer/>
    
      </BrowserRouter>
  );
}

export default App;

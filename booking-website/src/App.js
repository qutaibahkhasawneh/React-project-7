import Index from './components/Index';
import './App.css';
import { Appointment } from "./components/Appointment";
import Navbar from './Layout/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Layout/Footer';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
  <Routes>
      
      <Route path='/appointment' element={<Appointment />}/>

      {/* this is Home */}
      <Route path='/' element={<Index />}/>

      </Routes>
      <Footer/>
    
      </BrowserRouter>
  );
}

export default App;

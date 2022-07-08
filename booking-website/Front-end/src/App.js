
import './App.css';
import { Appointment } from "./components/Appointment";
import Navbar from './Layout/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Layout/Footer';
import Aboutus from './components/About-us';
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import Index from "./components/Index" 
import Profile from "./components/profile/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ServiceDetails from './components/service-details';
// import EditProfile from './components/profile/EditProfile';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

      {/* this is Home */}
      <Route path='/' element={<Index id={1} />}/>

        {/* Appointment us page */}
        <Route path="/appointment" element={<Appointment />} />

        {/* Contact us page */}
        <Route path="/contact" element={<Contact />} />

        {/* Testimoninals us page */}
        <Route path="/Testimonials" element={<Testimonials />} />
        {/* Team us page */}
        <Route path="/Team" element={<Team />} />
        {/* about us page */}
        <Route path="/about" element={<Aboutus />} />
        {/* profile  page */}
        <Route path="/profile" element={<Profile id={1}/>} />
        {/* Login  page */}
        <Route path="login" element={<Login />} />
        {/* Signup  page */}
        <Route path="Signup" element={<Signup />} />
        {/* service-datails  page */}
       <Route path='service/:id' element={<ServiceDetails/>} />
       {/* <Route path='service' element={<ServiceDetails/>} /> */}
       {/* Edit Profile */}
       {/* <Route path='/edit/:id' element={<EditProfile/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

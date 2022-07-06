
import './App.css';
import { Appointment } from "./components/Appointment";
import Navbar from './Layout/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Layout/Footer';
import Aboutus from './components/About-us';
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Appointment us page */}
        <Route path="/appointment" element={<Appointment />} />

        {/* Contact us page */}
        <Route path="/contact" element={<Contact />} />

        {/* Testimoninals us page */}
        <Route path="/Testimonials" element={<Testimonials />} />
        {/* Team us page */}
        <Route path="/Team" element={<Team />} />
        {/* about us page */}
        <Route path="about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

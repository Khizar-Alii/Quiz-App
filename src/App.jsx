import Navbar from './My Components/Navbar';
import Home from './My Components/Home';
import Contact from './My Components/Contact';
import AboutUs from './My Components/AboutUs';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './My Components/AboutUs';

function App() {
  return (
    <div className="App">  
    <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </div>
  )
}

export default App

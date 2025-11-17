// In App.jsx - Update the imports at the top
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tutoring from './pages/Tutoring';
import Results from './pages/Results';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    
        <Navbar />
       {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutoring" element={<Tutoring />} />
            <Route path="/results" element={<Results />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        
      
    </Router>
  );
}

export default App;
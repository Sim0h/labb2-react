import {HashRouter, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import CV from './components/CV.js';
import Footer from './components/Footer';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Placeholder from './components/Placeholder.js';
import Home from './components/Home.js';


function App() {
  return (
    <HashRouter>
      <div className='content'>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/placeholder">Placeholder</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/cv" element={<CV/>} />
          <Route path ="/portfolio" element={<Portfolio />} />
          <Route path ="/placeholder" element={<Placeholder />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>

  );
}

export default App;

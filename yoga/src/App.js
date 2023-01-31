import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomeSection/Home'
import About from './components/pages/AboutSection/About'
import Dormitorio from './components/pages/DormSection/Dormitorio'
import Trindade from './components/pages/TrindadeSection/Trindade'
import Contact from './components/pages/ContactSection/Contact'
import Navbar from './components/layout//MenuSection/Navbar'
import Footer from './components/layout/FooterSection/Footer'





import './App.css';



function App() {
  return (
    <Router>

      <Navbar />
      
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>

            <Route path='/about' element={<About />}>
            </Route>

            <Route path='/dormitorios' element={<Dormitorio />}>
            </Route>

            <Route path='/trindade' element={<Trindade />}>
            </Route>

            <Route path='/contact' element={<Contact />}>
            </Route>
          </Routes>

     


      <Footer />

    </Router>
  );
}

export default App;
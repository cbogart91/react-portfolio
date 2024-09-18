import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';


function App(){
  return (
    <Router>
      <Header />
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
    </Router>
  );

}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import SkillCard from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';

function App(){
  return (
    <Router>
      <Header />
    <main>
        <Home />
        <AboutMe />
        <SkillCard />
        <Work />
        <Resume />
        <Contact />
    </main>
        <Footer />
    </Router>
    
  );

}

export default App;

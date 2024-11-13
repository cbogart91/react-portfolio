import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import SkillCard from './components/Skill';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Message from './pages/Message';

import Header from './components/Header';
import Footer from './components/Footer';



function App(){
  return (
    <Router>
      <Header />
    <main>
      <Home />
      <AboutMe />
      <SkillCard />
    </main>
    {/* <Footer /> */}
    </Router>
    
  );

}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './pages/Message';


function App(){
  return (
    <Router>
      <Header />
    <main>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      
    </main>
    <Footer />
    </Router>
    
  );

}

export default App;

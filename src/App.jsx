////////////////this page will be constant and do not need to change///////////

import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
// import AboutMe from './components/AboutMe';
// import Projects from '.components/Projects';

function App(){
  return (
    <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
    </>
  );
}

export default App;

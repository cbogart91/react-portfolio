import { Link, useLocation } from 'react-router-dom';

function Navbar(){
    const currentPage = useLocation().pathname;
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/Home" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
           </li>

           <li className="nav-item">
                <Link to="/AboutMe" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
            </li>

            <li className="nav-item">
                <Link to="/Projects" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </li>

            <li className="nav-item">
                <Link to="/Resume" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>

            <li className="nav-item">
                <Link to="/Contacts" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
        </ul>
    );
}

export default Navbar;
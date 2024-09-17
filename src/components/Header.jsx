import { Link, useLocation } from 'react-router-dom';

function Header(){
    const currentPage = useLocation().pathname;
    return (
      <header className="grid justify-items bg-slate-500 box-border h-32 p-2 border-2 ">
        <h1>Cody Bogart</h1>
         <div className="text-xl font-bold flex space-x-5 justify-self-end">

                <div>
                <Link to="/Home" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                </div>

                <div>    
                <Link to="/AboutMe" className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </div>

                <div>    
                <Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
                </div>

                <div>   
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                </div>

                <div>   
                <Link to="/Contacts" className={currentPage === '/Contacts' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
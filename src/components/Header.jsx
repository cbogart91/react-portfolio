import { Link, useLocation } from 'react-router-dom';

function Header(){
    const currentPage = useLocation().pathname;
    return (
      <header className="rounded bg-slate-500 box-border p-8">
        <h1 className="pl-4 flex justify-center">Cody Bogart</h1>
         <div className="text-xl font-bold space-x-5 flex justify-center">
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

            
            </div>
        </header>
    );
}

export default Header;
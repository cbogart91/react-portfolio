import { Link, useLocation } from 'react-router-dom';

function Navbar(){
    const linkStyle = { border: '1px black', padding: '5px' };
    const currentPage = useLocation().pathname;
    return (
        <nav className="main-header-menu">
        <section
        style={{
            display: 'flex',
            fontFamily: 'fantasy',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}
        >
             <div style={linkStyle}>
                <Link to="/home" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/aboutme" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/projects" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/resume" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/contacts" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </div>
        </section>
        </nav>
    );
}

export default Navbar;
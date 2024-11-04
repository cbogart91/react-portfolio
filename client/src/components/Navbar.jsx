import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Navbar({ navOpen }){
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    useEffect(initActiveBox, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
    }

    const navItems = [
        {
            label: 'Home',
            link: 'Home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About Me',
            link: 'AboutMe',
            className: 'nav-link'
        },
        {
            label: 'Projects',
            link: 'Projects',
            className: 'nav-link'
        },
        {
            label: 'Resume',
            link: 'Resume',
            className: 'nav-link'
        },
        {
            label: 'Contact Me',
            link: 'Contact Me',
            className: 'nav-link md:hidden'
        }
    ];
    return (
        <nav className={ 'navbar ' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({ label, link, className, ref }, key) => (
                <a 
                href={link}
                key={key}
                ref={ref}
                className={className}
                onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))
        }
        <div className="active-box"
        ref={activeBox}></div>
        </nav>
    );
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}
export default Navbar;
import { Link, useLocation } from 'react-router-dom';

function Footer(){
    return (
      <div id="footer">
        <div className="footer-item">
            <footer id="links" className="py-3">
                <h1>Links</h1>
                <ul>
                
                <a href="https://github.com/cbogart91">
                <img src="/images/GitHub_Invertocat_Logo.svg" width="100"></img>
                </a>
               
                <a href="www.linkedin.com/in/cody-bogart-2a5579113">
                <img src="/images/linkedin.png" width="100"></img>
                </a>

                </ul>
            </footer>
        </div>
      </div>
    );
};


export default Footer;
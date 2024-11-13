import { ButtonPrimary } from './Button'; 

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#aboutme'
  },
  {
    label: 'Projects',
    href: '#work'
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/cbogart91',
    imgSrc: '/images/github-mark-white.png'
  },
  {
    label: "LinkedIn",
    href: 'https://www.linkedin.com/in/cody-bogart-2a5579113/'
  }
];


const Footer = () => {
    return (
   <footer className="section">
    <div className="container">
      <div className="lg:grid lg:grid-cols-2">
        <div className="mb-10">
          <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
            Thank you for visiting!
          </h2>
        <ButtonPrimary
          href="mainto: cbogart91@gmail.com"
          label="Start project"
        />

      </div>
      
        <div className='grid grid-cols-2 gap-4 lg:pl-20'>
          <div>
            <p className='mb-2'>Sitemap</p>
            <ul>
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                  href={href}
                  className="block text-sm py-1 transition-colors hover:text-zinc-200">
                  {label}
                  </a>
                </li>
              ) )}
            </ul>
          </div>

          <div className=''>
         
            <p className='mb-2'>Socials</p>
            <ul>
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a

                  href={href}
                  target="_blank"
                  className="block text-sm py-1 transition-colors hover:text-zinc-200">
                  {label}
                  </a>
                </li>
              ) )}
            </ul>
          
          </div>



        </div>
      </div>

      <div className='flex items-center justify-between pt-10 mb-8'>
        <a 
        href="" 
        className=''>
          <img  src="/images/eli.jpg"
                width={40}
                height={40}
                alt="eli"
                />
        </a>
        <p className="text-sm">
          &copy; 2024 <span className="text-slate-300"> Cody Bogart</span>
        </p>
        
      </div>

    </div>
   </footer>
    );
};


export default Footer;
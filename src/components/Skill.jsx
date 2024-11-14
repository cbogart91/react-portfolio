import SkillCard from './SkillCard';

const skillItem = [
    {
        imgSrc:'images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc:'images/css3.svg',
        label: 'CSS',
        desc: 'User interface'
    },
    {
        imgSrc:'images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc:'images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc:'images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User interface'
    },
    {
        imgSrc:'images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc:'images/vite.svg',
        label: 'Vite',
        desc: 'Framework'
    },
    {
        imgSrc:'images/express-js.png',
        label: 'Express',
        desc: 'Web application'
    },
    {
        imgSrc:'images/graphql.png',
        label: 'GraphQL',
        desc: 'Database'
    },
    {
        imgSrc:'images/netlify.png',
        label: 'Netlify',
        desc:'Deployment'
    }
]

export default function Skill(){
    return(
    <section className="section">
        <div className="container bg-slate-400 px-6 py-2 rounded-2xl">
            <h2 className="headline-2">
            Essential tools I use
            </h2>
            <p className="">
                These are the tools that I have learned and implemented into creating websites:
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) =>
                    (
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}

                        />
                    ))
                }
            </div>
        </div>
    </section>
    )
}
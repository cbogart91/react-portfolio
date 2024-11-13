import ProjectCard from "./ProjectCard";

const projects = [
    {
        imgSrc:'/images/logomaker.jpg',
        title: 'Logo Maker',
        tags: ['Node', 'Beginner'],
        projectLink:'https://github.com/cbogart91/logo-maker'
    },
    {
        imgSrc:'/images/weatherapp.jpg',
        title: 'Weather Tracker',
        tags: ['API', 'Beginner'],
        projectLink:'https://github.com/cbogart91/weather-tracker'
    },
    {
        imgSrc:'/images/employeetracker.jpg',
        title: 'Employee Tracker',
        tags: ['Express', 'Beginner'],
        projectLink:'https://github.com/cbogart91/employee-tracker'
    },
];


const Work = () => {
    return(
        <section 
        id="work"
        className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    A few assignments/projects.
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work

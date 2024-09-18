export default function Projects(){
    return(
        <div className="flex flex-wrap gap-x-6 gap-y-4">

            <div className="hover:opacity-25">
            <a href="https://github.com/cbogart91/logo-maker">
            <img src="/images/logomaker.jpg" height="500"></img>
            </a>
            <p>Logo Maker</p>
            </div>

            <div className="hover:opacity-25">
            <a href="https://github.com/cbogart91/social-network">
            <img src="/images/socialnetwork.jpg" height="500"></img>
            </a>
            <p>Social Network</p>
            </div>

            <div className="hover:opacity-25">
            <a href="https://github.com/cbogart91/weather-tracker">
            <img src="/images/weatherapp.jpg" height="500"></img>
            </a>
            <p>Weather Tracker</p>
            </div>

            <div className="hover:opacity-25">
            <a href="https://github.com/cbogart91/employee-tracker">
            <img src="/images/employeetracker.jpg" height="500"></img>
            </a>
            <p>Employee Tracker</p>
            </div>
        
        </div>
    );
}
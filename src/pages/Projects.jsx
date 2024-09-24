export default function Projects(){
    return(
        <div className="grid grid-cols-2 grid-rows-4 gap-4 p-20">
          
            <div className="hover:opacity-75">
            <a href="https://github.com/cbogart91/logo-maker">
            <img src="/images/logomaker.jpg" className="size-9/12 hover:size-full"></img>
            </a>
            </div>

            <p>Logo Maker</p>
          

            <div className="hover:opacity-75">
            <a href="https://github.com/cbogart91/social-network">
            <img src="/images/socialnetwork.jpg" className="size-9/12 hover:size-full"></img>
            </a>
            </div>

            <p>Social Network</p>
           

            <div className="hover:opacity-75">
            <a href="https://github.com/cbogart91/weather-tracker">
            <img src="/images/weatherapp.jpg" className="size-9/12 hover:size-full"></img>
            </a>
            </div>
            <p>Weather Tracker</p>
           

            <div className="hover:opacity-75">
            <a href="https://github.com/cbogart91/employee-tracker">
            <img src="/images/employeetracker.jpg" className="size-9/12 hover:size-full"></img>
            </a>
            </div>
      
            <p>Employee Tracker</p>
    
        </div>
    );
}
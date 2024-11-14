import { ButtonPrimary, ButtonOutline } from "../components/Button";

const Home = () => {
    const onButtonClick = () => {
        fetch("resume2.pdf").then((response) =>{
            response.blob().then((blob) => {
                const fileURL = 
                    window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "resume2.pdf";
                alink.click();
            });
        });
    };
    return(
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                            src='/images/eli.jpg'
                            height={40}
                            width={40}
                            alt='eli'
                            className='img-cover'
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-600">
                                <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping"></span>
                            </span>
                        Available for work

                        
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Hello everyone! My name is Cody Bogart!
                    </h2>
                    <h2>
                        I am looking to be a web developer full time! Open to projects, networking, and simply having fun!
                    </h2>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onButtonClick}
                            label="Download CV"
                            icon=" " 
                            id="button"
                            >Download Resume</button>
                        <ButtonOutline
                            href="#aboutme"
                            label="Scroll down"
                            icon=" " />
                    </div>

                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto overflow-hidden">
                        <img 
                            src="/images/wedding.jpg"
                            width="400"
                            alt="cody"
                            className=""
                        />
                    </figure>
                </div>
            </div>


        </section>
    );
}

export default Home


        
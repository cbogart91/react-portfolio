import { ButtonPrimary, ButtonOutline } from "../components/Button";

export default function Home(){
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
                        <ButtonPrimary
                            label="Download CV"
                            icon=" " 
                            />
                        <ButtonOutline
                            href="AboutMe"
                            label="Scroll down"
                            icon="arrow_downward" />
                    </div>

                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
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




        
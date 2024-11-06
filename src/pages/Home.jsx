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

                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>
                        Available for work

                        
                        </div>
                    </div>
                    <h2 className="">
                        Hello everyone! My name is Cody Bogart and I am looking to be a full time web developer!
                    </h2>
                    <div className="">
                        ButtonPrimary
                        ButtonOutline
                    </div>

                </div>

                <div className="">
                    <figure className="">
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




        
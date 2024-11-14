export default function About(){
    return(
       <section
            id="aboutme"
            className="section">
                <div className="container">
                    <div className="bg-slate-500 p-7 rounded-2xl md:p-12 ">
                        <p className="mb-4 md:mb-8 md:text-xl md:max-w-[60ch] grid grid-cols-2 gap-4">
                        I have always had an interest in technology and have to give credit to my dad for the influence. 
                        He introduced me into computers at a young age and even let me have one in my room when I was around 8 years old!
                         <img   src="/images/me.jpg"
                                className="" />
                         </p>   
                    </div>
                </div>
            </section>
    );
}



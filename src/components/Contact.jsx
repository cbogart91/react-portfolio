

const Contact = () => {
    return (
        <section 
            className="section"
            id="contact"
            >
        <div className="bg-slate-500 px-6 py-6 rounded-2xl container lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="mb-12 lg:mb-0 lg:flex-col">
                <h2 className="headline-2 lg:max-w-[12ch]">
                    Contact me here!
                </h2>
                <p className="mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                    Reach out to me for any questions, comments, or wanting to collaborate!
                </p>
            </div>
            <form 
                action="https://getform.io/f/bwnnwkoa" 
                method="POST"
                className="xl:pl-10 2xl:pl-20">
            <div className="px-6 py-6 md:grid md:items-center md:grid-cols-1 md:gap-2">
                <div className="mb-4">
                    <label
                    htmlFor=""
                    className="label">
                        Name
                    </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        className="text-field"
                        placeholder="Cody Bogart"
                        />
                </div>

                <div className="mb-4">
                    <label
                    htmlFor="email"
                    className="label">
                        Email
                    </label>
                    <input 
                        type="text" 
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="text-field"
                        placeholder="cbogart@example.com"
                        />
                    </div>
                </div>

                <div className="px-6  mb-4">
                    <label 
                    htmlFor="message"
                    className="label"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Send a comment, question or anything!"
                        required
                        className="text-field resize-y min-h-32 max-h-80">
                        </textarea>
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary justify-center"
                    >
                        Submit
                </button>

                </form>
        </div>
        </section>
    )
}

export default Contact
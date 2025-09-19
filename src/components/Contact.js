const Contact = () => {
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            {/* <p>This is the Contact Us page of the application.</p> */}
            <form className="m-4">
                <input type="text" name="name" placeholder="Name" required className="p-2 m-2 border border-black rounded-lg"/>
                {/* <br /> */}
                <input type="email" name="email" placeholder="Email" required className="p-2 m-2 border border-black rounded-lg"/>
                <br />
                <textarea name="message" placeholder="Message" required className="p-2 m-2 border border-black rounded-lg"></textarea>
                <br />
                <button type="submit" className="p-2 m-2 border border-black rounded-lg hover:bg-black hover:text-white duration-[.3s] transition-all">Submit</button>
            </form>
        </div>
    );
}

export default Contact;